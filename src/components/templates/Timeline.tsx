import { IResume } from "@/type";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
} from "@react-pdf/renderer";

// Register fonts
// Font.register({
//   family: "Lato",
//   fonts: [
//     {
//       src: "https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjx4wXiWtFCc.woff2",
//       fontWeight: 400,
//     },
//     {
//       src: "https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2",
//       fontWeight: 700,
//     },
//   ],
// });

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    // fontFamily: "Lato",
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    borderBottom: "1px solid #e0e0e0",
    paddingBottom: 20,
  },
  nameTitle: {
    width: "70%",
  },
  name: {
    fontSize: 28,
    fontWeight: 700,
    color: "#2d3436",
    marginBottom: 5,
    letterSpacing: -0.5,
  },
  title: {
    fontSize: 14,
    color: "#636e72",
    fontWeight: 400,
  },
  contact: {
    width: "30%",
    alignItems: "flex-end",
  },
  contactItem: {
    fontSize: 10,
    color: "#636e72",
    marginBottom: 3,
    textAlign: "right",
  },
  timeline: {
    flexDirection: "row",
    marginBottom: 30,
  },
  timelineLeft: {
    width: "30%",
    paddingRight: 20,
    alignItems: "flex-end",
    textAlign: "right",
  },
  timelineRight: {
    width: "70%",
    paddingLeft: 20,
    borderLeft: "1px solid #74b9ff",
    position: "relative",
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#74b9ff",
    position: "absolute",
    left: -5.5,
    top: 5,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: "#636e72",
    marginBottom: 15,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#2d3436",
    marginBottom: 3,
  },
  company: {
    fontSize: 12,
    color: "#0984e3",
    marginBottom: 8,
    fontWeight: 700,
  },
  date: {
    fontSize: 10,
    color: "#636e72",
    marginBottom: 10,
  },
  highlight: {
    fontSize: 10,
    marginBottom: 8,
    lineHeight: 1.4,
    color: "#2d3436",
  },
  skillCategory: {
    fontSize: 12,
    fontWeight: 700,
    color: "#2d3436",
    marginBottom: 8,
    marginTop: 15,
  },
  skillItem: {
    fontSize: 10,
    marginBottom: 5,
    color: "#636e72",
  },
  educationDegree: {
    fontSize: 14,
    fontWeight: 700,
    color: "#2d3436",
    marginBottom: 3,
  },
  educationSchool: {
    fontSize: 12,
    color: "#0984e3",
    marginBottom: 8,
  },
  link: {
    color: "#0984e3",
    textDecoration: "none",
  },
});

const Timeline = ({ resume }: { resume: IResume }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.nameTitle}>
          <Text style={styles.name}>{resume.basics.name}</Text>
          <Text style={styles.title}>{resume.basics.label}</Text>
        </View>
        <View style={styles.contact}>
          <Text style={styles.contactItem}>{resume.basics.contact.email}</Text>
          <Text style={styles.contactItem}>{resume.basics.contact.phone}</Text>
          {resume.basics.contact.website && (
            <Link
              src={resume.basics.contact.website}
              style={[styles.contactItem, styles.link]}
            >
              Portfolio
            </Link>
          )}
          {resume.basics.contact.linkedin && (
            <Link
              src={resume.basics.contact.linkedin}
              style={[styles.contactItem, styles.link]}
            >
              LinkedIn
            </Link>
          )}
        </View>
      </View>

      {/* Summary */}
      {resume.basics.summary && (
        <View style={{ marginBottom: 30 }}>
          <Text style={styles.sectionTitle}>Professional Profile</Text>
          <Text style={styles.highlight}>{resume.basics.summary}</Text>
        </View>
      )}

      {/* Experience Timeline */}
      <Text style={styles.sectionTitle}>Professional Experience</Text>
      {resume.work.map((job) => (
        <View key={job.id} style={styles.timeline}>
          <View style={styles.timelineLeft}>
            <Text style={styles.date}>
              {job.startDate} — {job.endDate || "Present"}
            </Text>
          </View>
          <View style={styles.timelineRight}>
            <View style={styles.timelineDot} />
            <Text style={styles.jobTitle}>{job.position}</Text>
            <Text style={styles.company}>{job.name}</Text>
            {job.highlights.map((highlight, i) => (
              <Text key={i} style={styles.highlight}>
                • {highlight}
              </Text>
            ))}
          </View>
        </View>
      ))}

      {/* Education Timeline */}
      <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Education</Text>
      {resume.education.map((edu) => (
        <View key={edu.id} style={styles.timeline}>
          <View style={styles.timelineLeft}>
            <Text style={styles.date}>
              {edu.startDate} — {edu.endDate}
            </Text>
          </View>
          <View style={styles.timelineRight}>
            <View style={styles.timelineDot} />
            <Text style={styles.educationDegree}>
              {edu.studyType} in {edu.area}
            </Text>
            <Text style={styles.educationSchool}>{edu.institution}</Text>
            {edu.gpa && <Text style={styles.highlight}>GPA: {edu.gpa}</Text>}
          </View>
        </View>
      ))}

      {/* Skills */}
      <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
        Skills & Competencies
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {resume.skills?.map((skill) => (
          <View key={skill.id} style={{ width: "50%", marginBottom: 10 }}>
            <Text style={styles.skillCategory}>{skill.name}</Text>
            {skill.keywords?.map((keyword, i) => (
              <Text key={i} style={styles.skillItem}>
                • {keyword}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default Timeline;
