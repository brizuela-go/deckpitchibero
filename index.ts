const fetch = require("node-fetch");

const tokenSesion = "P02MDVERUFEODUtODVFNS00Q0E4LTk0MUMtQTVCNjYyNTU4MzdF";

// Existing time conversion functions
export const convertTimeDiff = (timeInSeconds: number) => {
  const seconds = timeInSeconds % 60;
  const minutes = Math.floor((timeInSeconds / 60) % 60);
  const hours = Math.floor((timeInSeconds / 3600) % 24);
  const days = Math.floor((timeInSeconds / 86400) % 7);
  const weeks = Math.floor((timeInSeconds / (86400 * 7)) % 4);
  const months = Math.floor((timeInSeconds / (86400 * 30)) % 12); // Approximation
  const years = Math.floor(timeInSeconds / (86400 * 365)); // Approximation

  return {
    seconds,
    minutes,
    hours,
    days,
    weeks,
    months,
    years,
  };
};

export const formatTimeDiff = (timeDiff: {
  seconds: any;
  minutes: any;
  hours: any;
  days: any;
  weeks: any;
  months: any;
  years: any;
}) => {
  const { seconds, minutes, hours, days, weeks, months, years } = timeDiff;
  const parts = [];

  if (years > 0) parts.push(`${years} año${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} mes${months > 1 ? "es" : ""}`);
  if (weeks > 0) parts.push(`${weeks} semana${weeks > 1 ? "s" : ""}`);
  if (days > 0) parts.push(`${days} día${days > 1 ? "s" : ""}`);
  if (hours > 0) parts.push(`${hours} hora${hours > 1 ? "s" : ""}`);
  if (minutes > 0) parts.push(`${minutes} minuto${minutes > 1 ? "s" : ""}`);
  if (seconds > 0 || parts.length === 0)
    parts.push(`${seconds} segundo${seconds > 1 ? "s" : ""}`);

  const formatted = parts.join(", ").replace(/,([^,]*)$/, " y$1");
  return formatted;
};

// Helper to filter based on the last 3 months
export const isInLastThreeMonths = (dateString: string | number | Date) => {
  const date = new Date(dateString);
  const today = new Date();
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(today.getMonth() - 3);

  return date >= threeMonthsAgo && date <= today;
};

// Make the API request with fetch
const fetchClientes = async (i: number) => {
  try {
    const response = await fetch("https://api.upnify.com/prospectos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: tokenSesion,
      },
      // Removed form object to fix the API request
      // Assuming it's a query string
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    const results = data.reduce(
      (
        acc: {
          [x: string]: {
            [x: string]: {
              nombre: any;
              tiempoPrimerRespuesta: string;
              fechaContacto: any;

              totalNonNullProspectos: any;
            }[];
          };
        },
        registro: {
          fechaContacto: string | number | Date;
          totalNonNullProspectos: any;
          contacto: any;
          tiempoPrimerRespuesta: any;
          ejecutivoNombre: any;
        }
      ) => {
        // Filter based on the last 3 months
        if (
          isInLastThreeMonths(registro.fechaContacto) &&
          registro.contacto &&
          registro.tiempoPrimerRespuesta
        ) {
          const clientName = registro.contacto;
          const ejecutivoNombre = registro.ejecutivoNombre;
          const tiempoPrimerRespuestaInSeconds = registro.tiempoPrimerRespuesta;

          // Convert and format tiempoPrimerRespuesta
          const timeDiff = convertTimeDiff(tiempoPrimerRespuestaInSeconds);
          const formattedDiff = formatTimeDiff(timeDiff);

          // Get month from fechaContacto
          const contactDate = new Date(registro.fechaContacto);
          const month = contactDate.toLocaleString("default", {
            month: "long",
          });

          // If the month does not exist in the accumulator, initialize it
          if (!acc[month]) {
            acc[month] = {};
          }

          // If the executive does not exist in the month, initialize it
          if (!acc[month][ejecutivoNombre]) {
            acc[month][ejecutivoNombre] = [];
          }

          // Push the client details into the corresponding executive array
          acc[month][ejecutivoNombre].push({
            nombre: clientName,
            tiempoPrimerRespuesta: formattedDiff,
            fechaContacto: registro.fechaContacto,
            totalNonNullProspectos: registro.totalNonNullProspectos,
          });
        }
        return acc;
      },
      {} // Initialize as an empty object
    );

    // Log the accumulated results
    console.log(JSON.stringify(results, null, 2));
  } catch (error) {
    console.error("Error fetching clientes:", error);
  }
};

// Fetch multiple pages
const fetchAllClients = async () => {
  for (let i = 1; i <= 1; i++) {
    await fetchClientes(i); // Await each fetch call to prevent overwhelming the API
  }
};

fetchAllClients();
