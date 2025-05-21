// ProfessionalResume.tsx
"use client";

import { IResume } from "@/type";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    padding: 40,
    color: "#222",
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 20,
    borderBottom: "1 solid #e0e0e0",
    paddingBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 4,
  },
  title: {
    fontSize: 12,
    color: "#555",
    marginBottom: 10,
  },
  contactInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 9,
    color: "#444",
    flexWrap: "wrap",
    gap: 8,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 8,
    letterSpacing: 0.5,
    borderLeft: "3 solid #3498db",
    paddingLeft: 8,
  },
  entry: {
    marginBottom: 12,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  entryPosition: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  entryDate: {
    fontSize: 9,
    color: "#666",
  },
  entryCompany: {
    fontSize: 10,
    color: "#3498db",
    marginBottom: 4,
  },
  entryDesc: {
    fontSize: 9,
    color: "#444",
    textAlign: "justify",
  },
  bulletList: {
    fontSize: 9,
    color: "#444",
    marginLeft: 10,
  },
  bulletItem: {
    marginBottom: 4,
  },
  educationDegree: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  educationSchool: {
    fontSize: 10,
    color: "#555",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  skillPill: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 8,
    color: "#333",
  },
  link: {
    color: "#3498db",
    textDecoration: "none",
  },
  sectionItem: {
    marginBottom: 8,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  itemName: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  itemDate: {
    fontSize: 9,
    color: "#666",
  },
  itemDetails: {
    fontSize: 9,
    color: "#3498db",
    marginBottom: 2,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginTop: 4,
  },
  tagPill: {
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    fontSize: 7,
    color: "#333",
  },
});

export const SlatePro = ({ data }: { data: IResume }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{data.basics.name}</Text>
        <Text style={styles.title}>{data.basics.label}</Text>
        <View style={styles.contactInfo}>
          <Text>{data.basics.contact.email}</Text>
          <Text>{data.basics.contact.phone}</Text>
          {data.basics.contact.website && (
            <Link style={styles.link} src={data.basics.contact.website}>
              {data.basics.contact.website.replace(/^https?:\/\//, "")}
            </Link>
          )}
          {data.basics.contact.linkedin && (
            <Link style={styles.link} src={data.basics.contact.linkedin}>
              LinkedIn
            </Link>
          )}
          {data.basics.contact.github && (
            <Link style={styles.link} src={data.basics.contact.github}>
              GitHub
            </Link>
          )}
          {data.basics.contact.portfolio && (
            <Link style={styles.link} src={data.basics.contact.portfolio}>
              Portfolio
            </Link>
          )}
          {data.basics.contact.address && (
            <Text>{data.basics.contact.address}</Text>
          )}
        </View>
      </View>

      {/* Profile Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
        <Text style={styles.entryDesc}>{data.basics.summary}</Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</Text>
        {data.work.map((work) => (
          <View key={work.id} style={styles.entry}>
            <View style={styles.entryHeader}>
              <Text style={styles.entryPosition}>{work.position}</Text>
              <Text style={styles.entryDate}>
                {work.startDate} - {work.endDate || "Present"}{" "}
                {work.location && `| ${work.location}`}
              </Text>
            </View>
            <Text style={styles.entryCompany}>{work.name}</Text>
            <View style={styles.bulletList}>
              {work.highlights.map((highlight, i) => (
                <Text key={i} style={styles.bulletItem}>
                  • {highlight}
                </Text>
              ))}
              {work.keywords && (
                <View style={styles.tagsContainer}>
                  {work.keywords.map((keyword, i) => (
                    <Text key={i} style={styles.tagPill}>
                      {keyword}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EDUCATION</Text>
        {data.education.map((edu) => (
          <View key={edu.id} style={styles.entry}>
            <Text style={styles.educationDegree}>
              {edu.studyType} in {edu.area}
            </Text>
            <Text style={styles.educationSchool}>
              {edu.institution} | {edu.startDate} - {edu.endDate}{" "}
              {edu.gpa && `| GPA: ${edu.gpa}`}
            </Text>
            {edu.courses && (
              <View style={styles.tagsContainer}>
                {edu.courses.map((course, i) => (
                  <Text key={i} style={styles.tagPill}>
                    {course}
                  </Text>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SKILLS</Text>
        <View style={styles.skillsContainer}>
          {data.skills.map((skill, i) => (
            <Text key={i} style={styles.skillPill}>
              {skill.name} {skill.level && `(${skill.level})`}
            </Text>
          ))}
        </View>
      </View>

      {/* Dynamic Sections */}
      {data.sections &&
        Object.entries(data.sections).map(([sectionTitle, section]) => (
          <View key={sectionTitle} style={styles.section}>
            <Text style={styles.sectionTitle}>
              {sectionTitle.toUpperCase()}
            </Text>
            {section.items.map((item, i) => (
              <View key={i} style={styles.sectionItem}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  {item.date && (
                    <Text style={styles.itemDate}>{item.date}</Text>
                  )}
                </View>
                {item.details && (
                  <Text style={styles.itemDetails}>{item.details}</Text>
                )}
                {item.description && (
                  <Text style={styles.entryDesc}>{item.description}</Text>
                )}
                {item.tags && (
                  <View style={styles.tagsContainer}>
                    {item.tags.map((tag, i) => (
                      <Text key={i} style={styles.tagPill}>
                        {tag}
                      </Text>
                    ))}
                  </View>
                )}
                {item.link && (
                  <Link style={[styles.link, { fontSize: 8 }]} src={item.link}>
                    {item.link.replace(/^https?:\/\//, "")}
                  </Link>
                )}
              </View>
            ))}
          </View>
        ))}
    </Page>
  </Document>
);
