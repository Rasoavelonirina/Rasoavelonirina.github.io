/* =============================================
   TECH ICONS — map tag labels → simple-icons slugs
   Injects <iconify-icon> into expertise tags
   Builds the marquee section
   ============================================= */

(function () {
  // Map of tag label → simple-icons slug
  // Verified against https://simpleicons.org
  const ICON_MAP = {
    // Data Engineering
    'Apache Spark': 'apachespark',
    'Kafka': 'apachekafka',
    'Airflow': 'apacheairflow',
    'Nifi': 'apache',
    'Talend': 'database',                  // no official, fallback
    'Hadoop': 'apachehadoop',
    'Delta Lake': 'databricks',
    'VTOM': null,

    // Cloud
    'BigQuery': 'googlebigquery',
    'Dataflow': 'googlecloud',
    'Pub/Sub': 'googlecloud',
    'Lambda': 'awslambda',
    'EMR': 'amazonwebservices',
    'RDS': 'amazonrds',
    'S3': 'amazons3',
    'Terraform': 'terraform',

    // BI
    'Power BI': 'powerbi',
    'Qlik Sense': 'qlik',
    'Tableau': 'tableau',
    'SAS Visual Analytics': null,
    'SQL': 'mysql',
    'DuckDB': 'duckdb',

    // Data & AI Security
    'RBAC / ABAC': null,
    'RGPD': null,
    'LLM Guardrails': null,
    'Adversarial Tests': null,
    'Data Masking': null,
    'Audit': null,

    // Programming
    'Python': 'python',
    'Shell': 'gnubash',
    'Node.js': 'nodedotjs',
    'Pandas': 'pandas',
    'Polars': null,
    'FastAPI': 'fastapi',
    'Flask': 'flask',

    // Machine Learning
    'TensorFlow': 'tensorflow',
    'PyTorch': 'pytorch',
    'Keras': 'keras',
    'Scikit-learn': 'scikitlearn',
    'BERT': null,
    'LLMs / LoRA': null,
    'YOLO': null,
  };

  // Marquee curated list (the most visually iconic logos with label)
  // Organized roughly: Data → Cloud → BI → Lang → ML → DevOps
  const MARQUEE_ITEMS = [
    { slug: 'apachespark',   label: 'Apache Spark' },
    { slug: 'apachekafka',   label: 'Kafka' },
    { slug: 'apacheairflow', label: 'Airflow' },
    { slug: 'apachehadoop',  label: 'Hadoop' },
    { slug: 'databricks',    label: 'Delta Lake' },
    { slug: 'googlecloud',   label: 'Google Cloud' },
    { slug: 'googlebigquery',label: 'BigQuery' },
    { slug: 'amazonaws',     label: 'AWS' },
    { slug: 'amazons3',      label: 'S3' },
    { slug: 'awslambda',     label: 'Lambda' },
    { slug: 'terraform',     label: 'Terraform' },
    { slug: 'docker',        label: 'Docker' },
    { slug: 'gitlab',        label: 'GitLab' },
    { slug: 'jenkins',       label: 'Jenkins' },
    { slug: 'powerbi',       label: 'Power BI' },
    { slug: 'tableau',       label: 'Tableau' },
    { slug: 'qlik',          label: 'Qlik Sense' },
    { slug: 'duckdb',        label: 'DuckDB' },
    { slug: 'python',        label: 'Python' },
    { slug: 'pandas',        label: 'Pandas' },
    { slug: 'fastapi',       label: 'FastAPI' },
    { slug: 'flask',         label: 'Flask' },
    { slug: 'nodedotjs',     label: 'Node.js' },
    { slug: 'tensorflow',    label: 'TensorFlow' },
    { slug: 'pytorch',       label: 'PyTorch' },
    { slug: 'keras',         label: 'Keras' },
    { slug: 'scikitlearn',   label: 'scikit-learn' },
    { slug: 'postgresql',    label: 'PostgreSQL' },
    { slug: 'mongodb',       label: 'MongoDB' },
  ];

  /* Inject icon at the start of every .tag whose label is mapped */
  function injectTagIcons() {
    document.querySelectorAll('.tag').forEach(tag => {
      const label = tag.textContent.trim();
      const slug = ICON_MAP[label];
      if (!slug) return;
      // Avoid double-injection on hot reload
      if (tag.querySelector('.tag-icon')) return;

      const icon = document.createElement('iconify-icon');
      icon.setAttribute('icon', `simple-icons:${slug}`);
      icon.classList.add('tag-icon');
      icon.setAttribute('aria-hidden', 'true');
      tag.prepend(icon);
    });
  }

  /* Build the marquee — duplicate items so the -50% transform loops seamlessly */
  function buildMarquee() {
    const track = document.getElementById('marqueeTrack');
    if (!track) return;

    const buildHalf = () => {
      const frag = document.createDocumentFragment();
      MARQUEE_ITEMS.forEach((item, i) => {
        const wrap = document.createElement('div');
        wrap.className = 'marquee-item';

        const icon = document.createElement('iconify-icon');
        icon.setAttribute('icon', `simple-icons:${item.slug}`);
        icon.setAttribute('aria-hidden', 'true');

        const label = document.createElement('span');
        label.className = 'label';
        label.textContent = item.label;

        wrap.append(icon, label);
        frag.append(wrap);

        // Divider between items (skipped after last)
        if (i < MARQUEE_ITEMS.length - 1) {
          const divider = document.createElement('span');
          divider.className = 'marquee-divider';
          divider.setAttribute('aria-hidden', 'true');
          frag.append(divider);
        }
      });
      return frag;
    };

    track.append(buildHalf());

    // Add a divider before the second copy so it loops cleanly
    const sep = document.createElement('span');
    sep.className = 'marquee-divider';
    sep.setAttribute('aria-hidden', 'true');
    track.append(sep);

    track.append(buildHalf());
  }

  document.addEventListener('DOMContentLoaded', () => {
    injectTagIcons();
    buildMarquee();
  });
})();
