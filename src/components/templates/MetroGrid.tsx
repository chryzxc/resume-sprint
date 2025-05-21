"use client";
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    padding: 40,
    fontFamily: "Helvetica",
    backgroundColor: "#fdfdfd",
  },
  left: {
    width: "35%",
    paddingRight: 20,
    borderRight: "1 solid #ddd",
  },
  right: {
    width: "65%",
    paddingLeft: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 5,
  },
  role: {
    fontSize: 11,
    color: "#666",
    marginBottom: 15,
  },
  section: {
    marginBottom: 18,
  },
  heading: {
    fontSize: 12,
    fontWeight: 600,
    marginBottom: 6,
    color: "#1e293b",
    textTransform: "uppercase",
    borderBottom: "1 solid #ccc",
    paddingBottom: 3,
  },
  item: {
    marginBottom: 8,
  },
  label: {
    fontWeight: 600,
  },
  small: {
    fontSize: 9,
    color: "#333",
  },
});

const MetroGrid = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* LEFT */}
      <View style={styles.left}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.role}>{data.title}</Text>

        <View style={styles.section}>
          <Text style={styles.heading}>Contact</Text>
          <Text style={styles.small}>{data.email}</Text>
          <Text style={styles.small}>{data.phone}</Text>
          <Text style={styles.small}>{data.location}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Skills</Text>
          {data.skills.map((s, i) => (
            <Text style={styles.small} key={i}>
              • {s}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Education</Text>
          {data.education.map((edu, i) => (
            <View key={i}>
              <Text style={styles.small}>{edu.degree}</Text>
              <Text style={styles.small}>
                {edu.school} – {edu.year}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* RIGHT */}
      <View style={styles.right}>
        <View style={styles.section}>
          <Text style={styles.heading}>Profile</Text>
          <Text style={styles.small}>{data.summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Experience</Text>
          {data.experience.map((exp, i) => (
            <View key={i} style={styles.item}>
              <Text style={styles.label}>
                {exp.position} @ {exp.company}
              </Text>
              <Text style={styles.small}>
                {exp.start} – {exp.end}
              </Text>
              <Text style={styles.small}>{exp.description}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default MetroGrid;
