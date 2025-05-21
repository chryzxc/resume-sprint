import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
  Font,
} from "@react-pdf/renderer";
import { IResume } from "@/type";

// Register fonts if needed (optional)
// Font.register({ family: 'Open Sans', src: 'https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf' });

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 11,
  },
  header: {
    flexDirection: "column",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    borderBottomStyle: "solid",
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  contactIcon: {
    marginRight: 5,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderBottomStyle: "solid",
  },
  summary: {
    marginBottom: 15,
    lineHeight: 1.4,
  },
  workItem: {
    marginBottom: 12,
  },
  workHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  workCompany: {
    fontWeight: "bold",
    fontSize: 13,
  },
  workPosition: {
    fontStyle: "italic",
  },
  workLocation: {
    color: "#555",
  },
  workDate: {
    color: "#555",
  },
  highlights: {
    marginLeft: 10,
  },
  highlightItem: {
    flexDirection: "row",
    marginBottom: 3,
  },
  bulletPoint: {
    width: 10,
  },
  educationItem: {
    marginBottom: 10,
  },
  educationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  educationInstitution: {
    fontWeight: "bold",
  },
  educationArea: {
    fontStyle: "italic",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillItem: {
    backgroundColor: "#f0f0f0",
    borderRadius: 3,
    padding: "3px 8px",
    marginRight: 5,
    marginBottom: 5,
  },
  sectionItem: {
    marginBottom: 10,
  },
  sectionItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  sectionItemName: {
    fontWeight: "bold",
  },
  sectionItemDetails: {
    color: "#555",
  },
  sectionItemTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 3,
  },
  tag: {
    backgroundColor: "#f0f0f0",
    borderRadius: 3,
    padding: "2px 5px",
    marginRight: 5,
    marginBottom: 5,
    fontSize: 9,
  },
});

const Minimalist: React.FC<{ resumeData: IResume }> = ({ resumeData }) => {
  const { basics, work, education, skills, sections } = resumeData;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{basics.name}</Text>
          <Text style={styles.label}>{basics.label}</Text>
          <View style={styles.contactRow}>
            {basics.contact.email && (
              <View style={styles.contactItem}>
                <Text style={styles.contactIcon}>✉</Text>
                <Link src={`mailto:${basics.contact.email}`}>
                  {basics.contact.email}
                </Link>
              </View>
            )}
            {basics.contact.phone && (
              <View style={styles.contactItem}>
                <Text style={styles.contactIcon}>📞</Text>
                <Text>{basics.contact.phone}</Text>
              </View>
            )}
            {basics.contact.website && (
              <View style={styles.contactItem}>
                <Text style={styles.contactIcon}>🌐</Text>
                <Link src={basics.contact.website}>
                  {basics.contact.website.replace(/^https?:\/\//, "")}
                </Link>
              </View>
            )}
            {basics.contact.linkedin && (
              <View style={styles.contactItem}>
                <Text style={styles.contactIcon}>🔗</Text>
                <Link src={basics.contact.linkedin}>LinkedIn</Link>
              </View>
            )}
            {basics.contact.github && (
              <View style={styles.contactItem}>
                <Text style={styles.contactIcon}>🐙</Text>
                <Link src={basics.contact.github}>GitHub</Link>
              </View>
            )}
            {basics.contact.portfolio && (
              <View style={styles.contactItem}>
                <Text style={styles.contactIcon}>🖥️</Text>
                <Link src={basics.contact.portfolio}>Portfolio</Link>
              </View>
            )}
          </View>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.summary}>{basics.summary}</Text>
        </View>

        {/* Work Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          {work.map((job) => (
            <View key={job.id} style={styles.workItem}>
              <View style={styles.workHeader}>
                <View>
                  <Text style={styles.workCompany}>{job.name}</Text>
                  <Text style={styles.workPosition}>{job.position}</Text>
                  {job.location && (
                    <Text style={styles.workLocation}>{job.location}</Text>
                  )}
                </View>
                <Text style={styles.workDate}>
                  {job.startDate} - {job.endDate || "Present"}
                </Text>
              </View>
              <View style={styles.highlights}>
                {job.highlights.map((highlight, idx) => (
                  <View key={idx} style={styles.highlightItem}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text>{highlight}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((edu) => (
            <View key={edu.id} style={styles.educationItem}>
              <View style={styles.educationHeader}>
                <View>
                  <Text style={styles.educationInstitution}>
                    {edu.institution}
                  </Text>
                  <Text style={styles.educationArea}>
                    {edu.studyType} in {edu.area}
                  </Text>
                </View>
                <Text>
                  {edu.startDate} - {edu.endDate}
                </Text>
              </View>
              {edu.gpa && <Text>GPA: {edu.gpa}</Text>}
              {edu.courses && edu.courses.length > 0 && (
                <Text>Courses: {edu.courses.join(", ")}</Text>
              )}
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {skills.map((skill, idx) => (
              <View key={idx} style={styles.skillItem}>
                <Text>
                  {skill.name}
                  {skill.level && ` (${skill.level})`}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Additional Sections */}
        {sections && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{sections.title}</Text>
            {sections.items?.map((item, idx) => (
              <View key={idx} style={styles.sectionItem}>
                <View style={styles.sectionItemHeader}>
                  <Text style={styles.sectionItemName}>{item.name}</Text>
                  {item.date && <Text>{item.date}</Text>}
                </View>
                {item.details && (
                  <Text style={styles.sectionItemDetails}>{item.details}</Text>
                )}
                {item.description && <Text>{item.description}</Text>}
                {item.tags && item.tags.length > 0 && (
                  <View style={styles.sectionItemTags}>
                    {item.tags.map((tag, tagIdx) => (
                      <Text key={tagIdx} style={styles.tag}>
                        {tag}
                      </Text>
                    ))}
                  </View>
                )}
                {item.link && (
                  <Link src={item.link}>
                    {item.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </Link>
                )}
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};

export default Minimalist;
