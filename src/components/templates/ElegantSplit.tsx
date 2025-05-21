// ElegantSplit.tsx
"use client";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    fontFamily: "Helvetica",
    fontSize: 10,
    backgroundColor: "#ffffff",
    color: "#333",
    padding: 20,
  },
  leftColumn: {
    width: "30%",
    paddingRight: 10,
    borderRight: "1 solid #ccc",
  },
  rightColumn: {
    width: "70%",
    paddingLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#2c3e50",
  },
  title: {
    fontSize: 11,
    marginBottom: 8,
    color: "#2980b9",
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 6,
    textTransform: "uppercase",
    color: "#34495e",
    borderBottom: "1 solid #ddd",
    paddingBottom: 2,
  },
  textItem: {
    marginBottom: 4,
    lineHeight: 1.4,
  },
  bold: {
    fontWeight: "bold",
  },
  tagLine: {
    fontStyle: "italic",
    color: "#555",
  },
  description: {
    marginTop: 2,
    color: "#444",
  },
});

export const ElegantSplit = ({ data }: { data: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Left Column */}
      <View style={styles.leftColumn}>
        {/* Name & Title */}
        <View style={styles.section}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.title}>{data.title}</Text>
        </View>

        {/* Contact */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Text style={styles.textItem}>{data.email}</Text>
          <Text style={styles.textItem}>{data.phone}</Text>
          <Text style={styles.textItem}>{data.website}</Text>
          <Text style={styles.textItem}>{data.github}</Text>
          <Text style={styles.textItem}>{data.linkedin}</Text>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {data.skills.map((skill: string, i: number) => (
            <Text key={i} style={styles.textItem}>
              • {skill}
            </Text>
          ))}
        </View>

        {/* Languages */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Languages</Text>
          {data.languages.map((lang: any, i: number) => (
            <Text key={i} style={styles.textItem}>
              {lang.name} – {lang.level}
            </Text>
          ))}
        </View>
      </View>

      {/* Right Column */}
      <View style={styles.rightColumn}>
        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile</Text>
          <Text style={styles.description}>{data.summary}</Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {data.experience.map((exp: any, i: number) => (
            <View key={i} style={styles.textItem}>
              <Text style={styles.bold}>
                {exp.position} – {exp.company}
              </Text>
              <Text style={styles.tagLine}>
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
            <View key={i} style={styles.textItem}>
              <Text style={styles.bold}>{proj.name}</Text>
              <Text style={styles.description}>{proj.description}</Text>
              <Text style={styles.tagLine}>Tools: {proj.tools.join(", ")}</Text>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {data.education.map((edu: any, i: number) => (
            <View key={i} style={styles.textItem}>
              <Text style={styles.bold}>{edu.degree}</Text>
              <Text style={styles.tagLine}>
                {edu.school} – {edu.year} ({edu.location})
              </Text>
            </View>
          ))}
        </View>

        {/* Certifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          {data.certifications.map((cert: any, i: number) => (
            <Text key={i} style={styles.textItem}>
              {cert.name} – {cert.issuer}, {cert.date}
            </Text>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);
