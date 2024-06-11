import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
// import "jspdf-autotable";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export const ExcelDownload = (reportData) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const ws = XLSX.utils.json_to_sheet(reportData);
  const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, "report" + fileExtension);
};

export const PdfDownload = (reportData) => {
  const pdf = new jsPDF("p", "mm", "a4", true);
  const columns = Object.keys(reportData[0]);
  const rows = reportData.map((entry) => Object.values(entry));

  pdf.autoTable({ columns, body: rows });
  pdf.save("report.pdf");
};
 export const handleThemeChange = () => {
   const currTheme = localStorage.getItem("theme");
   if (currTheme === "dark") {
     localStorage.setItem("theme", "light");
     document.documentElement.classList.remove("dark");
   } else {
     localStorage.setItem("theme", "dark");
     document.documentElement.classList.add("dark");
   }
 };