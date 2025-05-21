"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12, fontFamily: "Helvetica" },
  section: { marginBottom: 10 },
  heading: { fontSize: 18, marginBottom: 5, fontWeight: "bold" },
  subheading: { fontSize: 14, marginBottom: 3, fontWeight: "bold" },
  text: { marginBottom: 2 },
});

type ResumePreviewProps = {
  name: string;
  title: string;
  summary: string;
  experience: string;
  skills: string;
};

export const ResumeDocument = ({
  name,
  title,
  summary,
  experience,
  skills,
}: ResumePreviewProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>{name}</Text>
        <Text>{title}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Summary</Text>
        <Text>{summary}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Experience</Text>
        <Text>{experience}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Skills</Text>
        <Text>{skills}</Text>
      </View>
    </Page>
  </Document>
);

export const ResumePreview = (props: ResumePreviewProps) => (
  <PDFViewer width="100%" height={600} className="border rounded-lg shadow-lg">
    <ResumeDocument {...props} />
  </PDFViewer>
);
