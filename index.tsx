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
import "dotenv/config";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PDFDIR: string;
    }
  }
}

const path = `${process.env.PDFDIR}/${argv[2] || "test.pdf"}`;

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
          <Text>Chart Image</Text>
          <Image src={img} />
        </View>
      </Page>
    </Document>
  );
};

render(<MyDocument />, path);
