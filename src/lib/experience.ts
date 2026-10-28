/**
 * Dynamic experience calculator for SAP ABAP & ABAP on HANA at Wipro.
 * Base start date: September 2025 (evaluates to 1.1 years as of October 2026,
 * and automatically increments as time progresses).
 */
export const getAbapExperience = () => {
  const startDate = new Date(2025, 8, 15); // September 15, 2025
  const now = new Date();

  const yearsDiff = now.getFullYear() - startDate.getFullYear();
  const monthsDiff = now.getMonth() - startDate.getMonth();
  const daysDiff = now.getDate() - startDate.getDate();

  // Ensure minimum baseline of 1.1 years (13.2 months) even if client clock is skewed
  const totalMonths = Math.max(13.2, yearsDiff * 12 + monthsDiff + (daysDiff >= 0 ? 0.3 : 0));
  const exactYears = totalMonths / 12;
  const decimalYears = exactYears.toFixed(1); // "1.1" currently

  return {
    decimalYears, // "1.1"
    formattedYears: `${decimalYears}+ years`, // "1.1+ years"
    badgeText: `${decimalYears}+ Years Experience`,
    fullBioText: `Currently working at Wipro on ABAP on HANA with ${decimalYears}+ years of experience in SAP ABAP & ABAP on HANA.`,
    shortRole: `Software Engineer @ Wipro (SAP ABAP / ABAP on HANA · ${decimalYears}+ yrs)`,
  };
};
