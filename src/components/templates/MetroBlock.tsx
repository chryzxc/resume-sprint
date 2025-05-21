// ModernBlock.tsx
"use client";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Styles
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    padding: 30,
    backgroundColor: "#fdfdfd",
    color: "#111",
  },
  header: {
    borderBottom: "2 solid #333",
    marginBottom: 16,
    paddingBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  title: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  contactInfo: {
    marginTop: 8,
    fontSize: 9,
    color: "#444",
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#2980b9",
    marginBottom: 6,
    borderBottom: "1 solid #ccc",
    paddingBottom: 2,
    textTransform: "uppercase",
  },
  entry: {
    marginBottom: 8,
  },
  entryHeader: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#222",
  },
  entrySub: {
    fontSize: 9,
    color: "#555",
  },
  entryDesc: {
    fontSize: 9,
    marginTop: 2,
    color: "#333",
  },
  list: {
    fontSize: 9,
    color: "#333",
  },
  tagLine: {
    fontStyle: "italic",
    color: "#666",
  },
});

export const ModernBlock = ({ data }: { data: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.contactInfo}>
          <Text>
            {data.email} | {data.phone}
          </Text>
          <Text>{data.website}</Text>
          <Text>
            {data.github} | {data.linkedin}
          </Text>
        </View>
      </View>

      {/* Profile */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <Text style={styles.entryDesc}>{data.summary}</Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {data.experience.map((exp: any, i: number) => (
          <View key={i} style={styles.entry}>
            <Text style={styles.entryHeader}>
              {exp.position} – {exp.company}
            </Text>
            <Text style={styles.entrySub}>
              {exp.start} to {exp.end} | {exp.location}
            </Text>
            <Text style={styles.entryDesc}>{exp.description}</Text>
          </View>
        ))}
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        {data.projects.map((proj: any, i: number) => (
          <View key={i} style={styles.entry}>
            <Text style={styles.entryHeader}>{proj.name}</Text>
            <Text style={styles.entryDesc}>{proj.description}</Text>
            <Text style={styles.tagLine}>Tools: {proj.tools.join(", ")}</Text>
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {data.education.map((edu: any, i: number) => (
          <View key={i} style={styles.entry}>
            <Text style={styles.entryHeader}>{edu.degree}</Text>
            <Text style={styles.entrySub}>
              {edu.school} – {edu.year} ({edu.location})
            </Text>
          </View>
        ))}
      </View>

      {/* Certifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certifications</Text>
        {data.certifications.map((cert: any, i: number) => (
          <Text key={i} style={styles.entryDesc}>
            {cert.name} – {cert.issuer}, {cert.date}
          </Text>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.list}>{data.skills.join(", ")}</Text>
      </View>

      {/* Languages */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Languages</Text>
        {data.languages.map((lang: any, i: number) => (
          <Text key={i} style={styles.entryDesc}>
            {lang.name} – {lang.level}
          </Text>
        ))}
      </View>
    </Page>
  </Document>
);
