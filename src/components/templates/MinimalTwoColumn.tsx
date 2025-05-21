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
    padding: 0,
    color: "#333",
    flexDirection: "row",
  },
  sidebar: {
    width: "30%",
    backgroundColor: "#f5f7fa",
    padding: 15,
    paddingTop: 25,
  },
  main: {
    width: "70%",
    padding: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 5,
  },
  title: {
    fontSize: 12,
    color: "#7f8c8d",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 8,
    borderBottom: "1 solid #eaecef",
    paddingBottom: 4,
  },
  sidebarSection: {
    marginBottom: 20,
  },
  sidebarTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 6,
  },
  sidebarText: {
    fontSize: 9,
    color: "#34495e",
    marginBottom: 4,
  },
  entry: {
    marginBottom: 12,
  },
  entryHeader: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  entrySub: {
    fontSize: 9,
    color: "#7f8c8d",
    marginBottom: 4,
  },
  entryDesc: {
    fontSize: 9,
    color: "#34495e",
    lineHeight: 1.4,
  },
  contactItem: {
    fontSize: 9,
    color: "#34495e",
    marginBottom: 5,
  },
  skillItem: {
    fontSize: 9,
    color: "#34495e",
    marginBottom: 3,
  },
  link: {
    color: "#3498db",
    textDecoration: "none",
  },
  bulletItem: {
    marginLeft: 10,
    marginBottom: 2,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginTop: 4,
  },
  tagPill: {
    fontSize: 8,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
});

export const MinimalTwoColumn = ({ data }: { data: IResume }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.name}>{data.basics.name}</Text>
          <Text style={styles.title}>{data.basics.label}</Text>
        </View>

        {/* Contact */}
        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarTitle}>Contact</Text>
          <Text style={styles.contactItem}>{data.basics.contact.email}</Text>
          <Text style={styles.contactItem}>{data.basics.contact.phone}</Text>
          {data.basics.contact.address && (
            <Text style={styles.contactItem}>
              {data.basics.contact.address}
            </Text>
          )}
          {data.basics.contact.website && (
            <Link
              style={[styles.contactItem, styles.link]}
              src={data.basics.contact.website}
            >
              {data.basics.contact.website.replace(/^https?:\/\//, "")}
            </Link>
          )}
          {data.basics.contact.linkedin && (
            <Link
              style={[styles.contactItem, styles.link]}
              src={data.basics.contact.linkedin}
            >
              LinkedIn
            </Link>
          )}
          {data.basics.contact.github && (
            <Link
              style={[styles.contactItem, styles.link]}
              src={data.basics.contact.github}
            >
              GitHub
            </Link>
          )}
          {data.basics.contact.portfolio && (
            <Link
              style={[styles.contactItem, styles.link]}
              src={data.basics.contact.portfolio}
            >
              Portfolio
            </Link>
          )}
        </View>

        {/* Skills */}
        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarTitle}>Skills</Text>
          {data.skills.map((skill) => (
            <Text key={skill.name} style={styles.skillItem}>
              • {skill.name} {skill.level && `(${skill.level})`}
            </Text>
          ))}
        </View>

        {/* Languages */}
        {data.sections?.languages && (
          <View style={styles.sidebarSection}>
            <Text style={styles.sidebarTitle}>Languages</Text>
            {data.sections.languages.items.map((lang, i) => (
              <Text key={i} style={styles.skillItem}>
                • {lang.name} {lang.details && `(${lang.details})`}
              </Text>
            ))}
          </View>
        )}

        {/* Certifications */}
        {data.sections?.certifications && (
          <View style={styles.sidebarSection}>
            <Text style={styles.sidebarTitle}>Certifications</Text>
            {data.sections.certifications.items.map((cert, i) => (
              <Text key={i} style={styles.sidebarText}>
                {cert.name} {cert.date && `(${cert.date})`}
              </Text>
            ))}
          </View>
        )}
      </View>

      {/* Main Content */}
      <View style={styles.main}>
        {/* Profile */}
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.sectionTitle}>Profile</Text>
          <Text style={styles.entryDesc}>{data.basics.summary}</Text>
        </View>

        {/* Experience */}
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {data.work.map((exp) => (
            <View key={exp.id} style={styles.entry}>
              <Text style={styles.entryHeader}>
                {exp.position} | {exp.name}
              </Text>
              <Text style={styles.entrySub}>
                {exp.startDate} - {exp.endDate || "Present"}{" "}
                {exp.location && `| ${exp.location}`}
              </Text>
              <View style={styles.entryDesc}>
                {exp.highlights.map((point, i) => (
                  <Text key={i} style={styles.bulletItem}>
                    • {point}
                  </Text>
                ))}
              </View>
              {exp.keywords && (
                <View style={styles.tagContainer}>
                  {exp.keywords.map((keyword, i) => (
                    <Text key={i} style={styles.tagPill}>
                      {keyword}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Projects */}
        {data.sections?.projects && (
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {data.sections.projects.items.map((proj, i) => (
              <View key={i} style={styles.entry}>
                <Text style={styles.entryHeader}>
                  {proj.link ? (
                    <Link src={proj.link} style={styles.link}>
                      {proj.name}
                    </Link>
                  ) : (
                    proj.name
                  )}
                </Text>
                {proj.description && (
                  <Text style={styles.entryDesc}>{proj.description}</Text>
                )}
                {proj.tags && (
                  <Text style={styles.entrySub}>
                    Tools: {proj.tags.join(", ")}
                  </Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        <View>
          <Text style={styles.sectionTitle}>Education</Text>
          {data.education.map((edu) => (
            <View key={edu.id} style={styles.entry}>
              <Text style={styles.entryHeader}>
                {edu.studyType} in {edu.area}
              </Text>
              <Text style={styles.entrySub}>
                {edu.institution} | {edu.startDate} - {edu.endDate}{" "}
                {edu.location && `| ${edu.location}`}
              </Text>
              {edu.gpa && <Text style={styles.entrySub}>GPA: {edu.gpa}</Text>}
              {edu.courses && (
                <View style={styles.tagContainer}>
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
      </View>
    </Page>
  </Document>
);
