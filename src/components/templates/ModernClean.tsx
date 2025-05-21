// ModernClean.tsx
"use client";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
    backgroundColor: "#fdfdfd",
    color: "#222",
  },
  header: {
    borderBottom: "2 solid #4A90E2",
    paddingBottom: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  title: {
    fontSize: 12,
    marginTop: 2,
    color: "#4A90E2",
  },
  contact: {
    fontSize: 10,
    marginTop: 4,
    color: "#555",
  },
  section: {
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  listItem: {
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 11,
    fontWeight: 700,
    marginBottom: 2,
  },
  itemDetails: {
    fontSize: 10,
    color: "#444",
  },
  description: {
    fontSize: 10,
    color: "#333",
    marginTop: 2,
  },
  tags: {
    fontSize: 9,
    color: "#666",
    marginTop: 2,
    fontStyle: "italic",
  },
});

export const ModernClean = ({ data }: { data: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.contact}>
          {data.email} | {data.phone} | {data.linkedin} | {data.github} |{" "}
          {data.website}
        </Text>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.description}>{data.summary}</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.description}>{data.skills.join(", ")}</Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {data.experience.map((exp: any, i: number) => (
          <View key={i} style={styles.listItem}>
            <Text style={styles.itemTitle}>
              {exp.position} – {exp.company}
            </Text>
            <Text style={styles.itemDetails}>
              {exp.start} to {exp.end} | {exp.location}
            </Text>
            <Text style={styles.description}>{exp.description}</Text>
          </View>
        ))}
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        {data.projects.map((proj: any, i: number) => (
          <View key={i} style={styles.listItem}>
            <Text style={styles.itemTitle}>{proj.name}</Text>
            <Text style={styles.description}>{proj.description}</Text>
            <Text style={styles.tags}>Tools: {proj.tools.join(", ")}</Text>
          </View>
        ))}
      </View>

      {/* Certifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certifications</Text>
        {data.certifications.map((cert: any, i: number) => (
          <Text key={i} style={styles.itemDetails}>
            {cert.name} – {cert.issuer}, {cert.date}
          </Text>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {data.education.map((edu: any, i: number) => (
          <View key={i}>
            <Text style={styles.itemTitle}>{edu.degree}</Text>
            <Text style={styles.itemDetails}>
              {edu.school} – {edu.year} ({edu.location})
            </Text>
          </View>
        ))}
      </View>

      {/* Languages */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Languages</Text>
        <Text style={styles.description}>
          {data.languages
            .map((lang: any) => `${lang.name} (${lang.level})`)
            .join(", ")}
        </Text>
      </View>
    </Page>
  </Document>
);
