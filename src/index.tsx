import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  render,
  Image,
} from "@react-pdf/renderer";
import { drawChartImage } from "./drawChart.js";
import { argv } from "process";
import { existsSync, mkdirSync } from "fs";
import "dotenv/config";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PDFDIR: string;
    }
  }
}

existsSync("pdf") || mkdirSync("pdf");

const name = argv[2] || "test";
const path = `${process.env.PDFDIR}/${name}.pdf`;

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const img = await drawChartImage();

const MyDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{name} 월간 보고서</Text>
          <Image src={img} />
        </View>
      </Page>
    </Document>
  );
};

render(<MyDocument />, path);
