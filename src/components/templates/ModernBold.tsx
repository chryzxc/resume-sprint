// BoldModernResume.tsx
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
    fontSize: 10,
    padding: 0,
    color: "#333",
  },
  header: {
    backgroundColor: "#2c3e50",
    padding: 30,
    color: "white",
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
    letterSpacing: 1,
  },
  title: {
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 15,
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 9,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconSpace: {
    width: 14,
    marginRight: 5,
  },
  mainContent: {
    paddingHorizontal: 30,
  },
  section: {
    marginBottom: 20,
    position: "relative",
    paddingLeft: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
    borderLeft: "4 solid #e74c3c",
    paddingLeft: 10,
  },
  entry: {
    marginBottom: 15,
    position: "relative",
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  entryTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  entrySubtitle: {
    fontSize: 10,
    color: "#e74c3c",
    marginBottom: 5,
  },
  entryDate: {
    fontSize: 9,
    color: "#7f8c8d",
  },
  entryContent: {
    fontSize: 9,
    color: "#444",
    paddingLeft: 10,
    borderLeft: "1 solid #eee",
  },
  bulletItem: {
    marginBottom: 4,
    flexDirection: "row",
  },
  bulletPoint: {
    width: 10,
    paddingTop: 3,
  },
  skillBar: {
    height: 8,
    backgroundColor: "#ecf0f1",
    borderRadius: 4,
    marginBottom: 12,
    position: "relative",
  },
  skillLevel: {
    height: 8,
    backgroundColor: "#e74c3c",
    borderRadius: 4,
    position: "absolute",
    left: 0,
    top: 0,
  },
  twoColumn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  column: {
    width: "48%",
  },
  link: {
    color: "#3498db",
    textDecoration: "none",
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 15,
  },
});

export const ModernBold = ({ data }: { data: IResume }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Dark Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{data.basics.name.toUpperCase()}</Text>
        <Text style={styles.title}>{data.basics.label}</Text>
        <View style={styles.contactRow}>
          <View style={styles.contactItem}>
            <View style={styles.iconSpace} />
            <Text>{data.basics.contact.email}</Text>
          </View>
          <View style={styles.contactItem}>
            <View style={styles.iconSpace} />
            <Text>{data.basics.contact.phone}</Text>
          </View>
          {data.basics.contact.linkedin && (
            <View style={styles.contactItem}>
              <View style={styles.iconSpace} />
              <Link
                style={[styles.link, { color: "white" }]}
                src={data.basics.contact.linkedin}
              >
                LinkedIn
              </Link>
            </View>
          )}
          {data.basics.contact.website && (
            <View style={styles.contactItem}>
              <View style={styles.iconSpace} />
              <Link
                style={[styles.link, { color: "white" }]}
                src={data.basics.contact.website}
              >
                Portfolio
              </Link>
            </View>
          )}
        </View>
      </View>

      <View style={styles.mainContent}>
        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PROFILE</Text>
          <Text style={styles.entryContent}>{data.basics.summary}</Text>
        </View>

        <View style={styles.divider} />

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EXPERIENCE</Text>
          {data.work.map((exp, i) => (
            <View key={exp.id} style={styles.entry}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>{exp.position}</Text>
                <Text style={styles.entryDate}>
                  {exp.startDate} — {exp.endDate || "Present"}
                </Text>
              </View>
              <Text style={styles.entrySubtitle}>
                {exp.name} {exp.location && `| ${exp.location}`}
              </Text>
              <View style={styles.entryContent}>
                {exp.highlights.map((point, j) => (
                  <View key={j} style={styles.bulletItem}>
                    <Text style={styles.bulletPoint}>• </Text>
                    <Text>{point}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.divider} />

        {/* Two Column Layout */}
        <View style={styles.twoColumn}>
          {/* Left Column */}
          <View style={styles.column}>
            {/* Education */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>EDUCATION</Text>
              {data.education.map((edu) => (
                <View key={edu.id} style={styles.entry}>
                  <Text style={styles.entryTitle}>
                    {edu.studyType} in {edu.area}
                  </Text>
                  <Text style={styles.entrySubtitle}>{edu.institution}</Text>
                  <Text style={styles.entryDate}>
                    {edu.startDate} — {edu.endDate}{" "}
                    {edu.location && `| ${edu.location}`}
                  </Text>
                  {edu.honors && (
                    <Text
                      style={{ fontSize: 8, color: "#7f8c8d", marginTop: 2 }}
                    >
                      {edu.honors}
                    </Text>
                  )}
                </View>
              ))}
            </View>

            {/* Skills */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>SKILLS</Text>
              {data.skills.map((skill, i) => (
                <View key={i} style={{ marginBottom: 10 }}>
                  <Text style={{ fontSize: 9, marginBottom: 3 }}>
                    {skill.name} {skill.level && `(${skill.level})`}
                  </Text>
                  {skill.level && (
                    <View style={styles.skillBar}>
                      <View
                        style={[
                          styles.skillLevel,
                          {
                            width:
                              skill.level === "Beginner"
                                ? "25%"
                                : skill.level === "Intermediate"
                                ? "50%"
                                : skill.level === "Advanced"
                                ? "75%"
                                : "100%",
                          },
                        ]}
                      />
                    </View>
                  )}
                </View>
              ))}
            </View>
          </View>

          {/* Right Column */}
          <View style={styles.column}>
            {/* Dynamic Sections */}
            {data.sections &&
              Object.entries(data.sections).map(([sectionKey, section]) => (
                <View key={sectionKey} style={styles.section}>
                  <Text style={styles.sectionTitle}>
                    {section.title.toUpperCase()}
                  </Text>
                  {section.items.map((item, i) => (
                    <View key={i} style={styles.entry}>
                      <Text style={styles.entryTitle}>{item.name}</Text>
                      {item.details && (
                        <Text style={styles.entrySubtitle}>{item.details}</Text>
                      )}
                      {item.date && (
                        <Text style={styles.entryDate}>{item.date}</Text>
                      )}
                      {item.description && (
                        <Text style={styles.entryContent}>
                          {item.description}
                        </Text>
                      )}
                    </View>
                  ))}
                </View>
              ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
