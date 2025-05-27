import { IResume } from "@/type";
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

// Use standard PDF fonts for guaranteed compatibility
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222222",
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 12,
    color: "#666666",
    marginTop: 5,
  },
  contact: {
    fontSize: 9,
    textAlign: "right",
    lineHeight: 1.5,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#222222",
    marginBottom: 12,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  job: {
    marginBottom: 20,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  company: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#222222",
  },
  position: {
    fontSize: 11,
    color: "#444444",
    fontStyle: "italic",
    marginBottom: 3,
  },
  date: {
    fontSize: 9,
    color: "#888888",
  },
  highlight: {
    fontSize: 10,
    marginBottom: 5,
    lineHeight: 1.4,
  },
  skillContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  skillPill: {
    backgroundColor: "#F5F5F5",
    borderRadius: 3,
    paddingVertical: 4,
    paddingHorizontal: 10,
    fontSize: 9,
    color: "#333333",
  },
  educationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  degree: {
    fontSize: 11,
    fontWeight: "bold",
  },
  school: {
    fontSize: 10,
    color: "#444444",
  },
});

const Clean = ({ resume }: { resume: IResume }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{resume.basics.name}</Text>
          <Text style={styles.title}>{resume.basics.label}</Text>
        </View>
        <View style={styles.contact}>
          <Text>{resume.basics.contact.email}</Text>
          <Text>{resume.basics.contact.phone}</Text>
          {resume.basics.contact.website && (
            <Text>{resume.basics.contact.website}</Text>
          )}
        </View>
      </View>

      {/* Summary */}
      {resume.basics.summary && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile</Text>
          <Text style={{ fontSize: 10, lineHeight: 1.5 }}>
            {resume.basics.summary}
          </Text>
        </View>
      )}

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {resume.work.map((job) => (
          <View key={job.id} style={styles.job}>
            <View style={styles.jobHeader}>
              <Text style={styles.company}>{job.name}</Text>
              <Text style={styles.date}>
                {job.startDate} — {job.endDate || "Present"}
              </Text>
            </View>
            <Text style={styles.position}>{job.position}</Text>
            {job.highlights.map((highlight, i) => (
              <Text key={i} style={styles.highlight}>
                • {highlight}
              </Text>
            ))}
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {resume.education.map((edu) => (
          <View key={edu.id} style={styles.educationItem}>
            <View>
              <Text style={styles.degree}>
                {edu.studyType} in {edu.area}
              </Text>
              <Text style={styles.school}>{edu.institution}</Text>
            </View>
            <Text style={styles.date}>
              {edu.startDate} — {edu.endDate}
            </Text>
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillContainer}>
          {resume.skills.map((skill) => (
            <Text key={skill.id} style={styles.skillPill}>
              {skill.name}
            </Text>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default Clean;
