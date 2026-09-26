import { createServerFn } from "@tanstack/react-start";

export const getAnalyticsMeasurementId = createServerFn({ method: "GET" }).handler(
  async () => {
    const measurementId = process.env["GOOGLE_ANALYTICS_MEASUREMENT_ID"];

    if (!measurementId || !/^G-[A-Z0-9]+$/i.test(measurementId.trim())) {
      return null;
    }

    return measurementId.trim();
  },
);