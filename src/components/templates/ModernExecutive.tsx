"use client";
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    padding: 50,
    lineHeight: 1.6,
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  title: {
    fontSize: 12,
    marginBottom: 10,
    color: "#7f8c8d",
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 6,
    textTransform: "uppercase",
    color: "#2c3e50",
    borderBottom: "1 solid #ccc",
    paddingBottom: 4,
  },
  text: {
    fontSize: 10,
    color: "#333",
  },
  job: {
    marginBottom: 10,
  },
  bold: {
    fontWeight: 600,
  },
});

const ModernExecutive = ({ data }) => (
  <Document>
    <Page style={styles.page} size="A4">
      <View style={styles.header}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.text}>
          {data.email} | {data.phone} | {data.location}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Profile</Text>
        <Text style={styles.text}>{data.summary}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Experience</Text>
        {data.experience.map((exp, i) => (
          <View key={i} style={styles.job}>
            <Text style={styles.bold}>
              {exp.position} — {exp.company}
            </Text>
            <Text style={styles.text}>
              {exp.start} – {exp.end}
            </Text>
            <Text style={styles.text}>{exp.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        {data.education.map((edu, i) => (
          <View key={i}>
            <Text style={styles.bold}>
              {edu.degree}, {edu.school}
            </Text>
            <Text style={styles.text}>{edu.year}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Skills</Text>
        <Text style={styles.text}>{data.skills.join(", ")}</Text>
      </View>
    </Page>
  </Document>
);

export default ModernExecutive;
