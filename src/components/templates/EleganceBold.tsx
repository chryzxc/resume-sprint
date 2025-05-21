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
    padding: 35,
    fontSize: 11,
    lineHeight: 1.5,
    color: "#333",
  },
  header: {
    borderBottom: "2px solid #2C3E50",
    marginBottom: 10,
    paddingBottom: 6,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  title: {
    fontSize: 14,
    color: "#7f8c8d",
    marginBottom: 6,
  },
  contact: {
    fontSize: 10,
    color: "#555",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  section: {
    marginTop: 12,
    marginBottom: 8,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2C3E50",
    borderBottom: "1px solid #ccc",
    marginBottom: 4,
    paddingBottom: 2,
    textTransform: "uppercase",
  },
  jobTitle: {
    fontWeight: "bold",
    fontSize: 11,
    color: "#000",
  },
  company: {
    fontSize: 10,
    marginBottom: 2,
    color: "#555",
  },
  description: {
    fontSize: 10,
    marginBottom: 4,
  },
  list: {
    marginBottom: 4,
  },
  listItem: {
    marginBottom: 2,
  },
  link: {
    color: "#2980b9",
    textDecoration: "underline",
  },
  smallText: {
    fontSize: 9,
    color: "#666",
  },
  skillPill: {
    display: "inline-block",
    marginRight: 6,
    marginBottom: 6,
    padding: "2px 6px",
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
    fontSize: 9,
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

export const EleganceBold = ({ data }: { data: IResume }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{data.basics.name}</Text>
        <Text style={styles.title}>{data.basics.label}</Text>
        <View style={styles.contact}>
          {data.basics.contact.email && (
            <Text>{data.basics.contact.email}</Text>
          )}
          {data.basics.contact.phone && (
            <Text>{data.basics.contact.phone}</Text>
          )}
          {data.basics.contact.address && (
            <Text>{data.basics.contact.address}</Text>
          )}
          {data.basics.contact.website && (
            <Link style={styles.link} src={data.basics.contact.website}>
              Portfolio
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
        </View>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>PROFESSIONAL SUMMARY</Text>
        <Text style={styles.description}>{data.basics.summary}</Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>PROFESSIONAL EXPERIENCE</Text>
        {data.work.map((job) => (
          <View key={job.id} style={styles.list}>
            <Text style={styles.jobTitle}>{job.position}</Text>
            <Text style={styles.company}>
              {job.name} | {job.startDate} – {job.endDate || "Present"}{" "}
              {job.location && `| ${job.location}`}
            </Text>
            <View style={styles.description}>
              {job.highlights.map((highlight, i) => (
                <Text key={i} style={styles.listItem}>
                  • {highlight}
                </Text>
              ))}
            </View>
            {job.keywords && (
              <View style={styles.tagContainer}>
                {job.keywords.map((keyword, i) => (
                  <Text key={i} style={styles.tagPill}>
                    {keyword}
                  </Text>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>EDUCATION</Text>
        {data.education.map((edu) => (
          <View key={edu.id} style={styles.list}>
            <Text style={styles.jobTitle}>
              {edu.studyType} in {edu.area}
            </Text>
            <Text style={styles.company}>
              {edu.institution} | {edu.startDate} – {edu.endDate}{" "}
              {edu.gpa && `| GPA: ${edu.gpa}`}
            </Text>
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

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>SKILLS</Text>
        <View style={styles.tagContainer}>
          {data.skills.map((skill) => (
            <Text key={skill.name} style={styles.skillPill}>
              {skill.name} {skill.level && `(${skill.level})`}
            </Text>
          ))}
        </View>
      </View>

      {/* Dynamic Sections */}
      {data.sections &&
        data.sections.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionHeader}>
              {section.title.toUpperCase()}
            </Text>
            {section.items.map((item, i) => (
              <View key={i} style={styles.list}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.jobTitle}>{item.name}</Text>
                  {item.date && (
                    <Text style={styles.smallText}>{item.date}</Text>
                  )}
                </View>
                {item.details && (
                  <Text style={styles.company}>{item.details}</Text>
                )}
                {item.description && (
                  <Text style={styles.description}>{item.description}</Text>
                )}
                {item.link && (
                  <Link style={[styles.link, { fontSize: 9 }]} src={item.link}>
                    {item.link.replace(/^https?:\/\//, "")}
                  </Link>
                )}
                {item.tags && (
                  <View style={styles.tagContainer}>
                    {item.tags.map((tag, i) => (
                      <Text key={i} style={styles.tagPill}>
                        {tag}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        ))}
    </Page>
  </Document>
);
