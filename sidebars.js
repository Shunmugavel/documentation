module.exports = {
  serverSidebar: [
    {
      type: "category",
      label: "Server",
      collapsed: false,
      items: [
        "server/introduction",
        "server/quick-install",
        "server/versions-and-dependencies",
        "server/options",
        "server/configuration",
        "server/production-deployment",
        "server/security",
        "content/how-to-integrate-elasticsearch-into-a-temporal-cluster",
        "server/namespaces",
        "server/multi-cluster",
        "server/archive-data",
      ],
    },
    {
      type: "category",
      label: "Quick links",
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Concepts",
          href: "/docs/concepts/introduction",
        },
        {
          type: "link",
          label: "SDKs",
          href: "/application-development",
        },
        {
          type: "link",
          label: "System tools",
          href: "/docs/system-tools/introduction",
        },
        {
          type: "link",
          label: "Additional resources",
          href: "/docs/external-resources",
        },
      ],
    },
  ],
  toolingSidebar: [
    {
      type: "category",
      label: "System Tools",
      collapsed: false,
      items: [
        "system-tools/introduction",
        "system-tools/tctl",
        "system-tools/web-ui",
      ],
    },
    {
      type: "category",
      label: "Quick links",
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Concepts",
          href: "/docs/concepts/introduction",
        },
        {
          type: "link",
          label: "Server",
          href: "/docs/server/introduction",
        },
        {
          type: "link",
          label: "SDKs",
          href: "/application-development",
        },
        {
          type: "link",
          label: "Additional resources",
          href: "/docs/external-resources",
        },
      ],
    },
  ],
  goSidebar: [
    {
      type: "category",
      label: "Go developer guide",
      collapsed: false,
      items: [
        "go/getting-started",

        "go/how-to-develop-a-workflow-definition-in-go",
        "go/how-to-develop-an-activity-definition-in-go",
        "go/how-to-spawn-an-activity-execution-in-go",
        "go/how-to-set-activityoptions-in-go",
        "go/how-to-get-the-result-of-an-activity-execution-in-go",
        "go/how-to-spawn-a-workflow-execution-in-go",
        "go/how-to-set-startworkflowoptions-in-go",
        "go/how-to-get-the-result-of-a-workflow-execution-in-go",
        "go/how-to-develop-a-worker-program-in-go",
        "go/how-to-set-workeroptions-in-go",
        "go/how-to-spawn-a-child-workflow-execution-in-go",
        "go/workflows",
        "go/activities",
        "go/task-queues",
        "go/signals",
        "go/queries",
        "go/retries",
        "go/error-handling",
        "go/selectors",
        "go/side-effect",
        "go/testing",
        "go/versioning",
        "go/sessions",
        "go/distributed-cron",
        "go/tracing",
        "go/search-apis",
        {
          type: "category",
          label: "Tutorials",
          collapsed: false,
          items: [
            "go/tutorial-prerequisites",
            "go/run-your-first-app-tutorial",
            "go/hello-world-tutorial",
            "go/sdk-video-tutorial",
            {
              type: "link",
              label: "Build an eCommerce app",
              href: "/blog/tags/go-ecommerce-tutorial",
            },
          ],
        },
        {
          type: "link",
          label: "Samples library",
          href: "/docs/samples-library/#go",
        },
        {
          type: "link",
          label: "Reference",
          href: "https://pkg.go.dev/go.temporal.io/sdk",
        },
      ],
    },
  ],
  javaSidebar: [
    {
      type: "category",
      label: "Java",
      collapsed: false,
      items: [
        "java/introduction",
        {
          type: "link",
          label: "Reference",
          href: "https://www.javadoc.io/doc/io.temporal/temporal-sdk/latest/index.html",
        },
        {
          type: "link",
          label: "Samples library",
          href: "/docs/samples-library/#java",
        },
        {
          type: "category",
          label: "Tutorials",
          collapsed: false,
          items: [
            "java/tutorial-prerequisites",
            "java/run-your-first-app-tutorial",
            "java/hello-world-tutorial",
          ],
        },
        "java/workflows",
        "java/activities",
        "java/workers",
        "java/task-queues",
        "java/signals",
        "java/queries",
        "java/versioning",
        "java/side-effect",
        "java/distributed-cron",
        "java/testing-and-debugging",
        "content/how-to-provide-an-authorization-token-in-java",
      ],
    },
    {
      type: "category",
      label: "Quick links",
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Concepts",
          href: "/docs/concepts/introduction",
        },
        {
          type: "link",
          label: "Server",
          href: "/docs/server/introduction",
        },
        {
          type: "link",
          label: "SDKs",
          href: "/application-development",
        },
        {
          type: "link",
          label: "System tools",
          href: "/docs/system-tools/introduction",
        },
        {
          type: "link",
          label: "Additional resources",
          href: "/docs/external-resources",
        },
      ],
    },
  ],
  phpSidebar: [
    {
      type: "category",
      label: "PHP",
      collapsed: false,
      items: [
        "php/introduction",
        {
          type: "link",
          label: "Samples library",
          href: "/docs/samples-library/#php",
        },
        "php/workflows",
        "php/activities",
        "php/task-queues",
        "php/workers",
        "php/signals",
        "php/queries",
        "php/retries",
        "php/error-handling",
        "php/side-effect",
        "php/versioning",
        "php/distributed-cron",
      ],
    },
    {
      type: "category",
      label: "Quick links",
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Concepts",
          href: "/docs/concepts/introduction",
        },
        {
          type: "link",
          label: "Server",
          href: "/docs/server/introduction",
        },
        {
          type: "link",
          label: "SDKs",
          href: "/application-development",
        },
        {
          type: "link",
          label: "System tools",
          href: "/docs/system-tools/introduction",
        },
        {
          type: "link",
          label: "Additional resources",
          href: "/docs/external-resources",
        },
      ],
    },
  ],
  typescriptSidebar: [
    {
      type: "category",
      label: "TypeScript (alpha)",
      collapsed: false,
      items: [
        "typescript/introduction",
        {
          type: "category",
          label: "TS Tutorials",
          items: [
            "typescript/package-initializer",
            "typescript/hello-world",
            "typescript/subscription-tutorial",
            "typescript/nextjs-tutorial",
            {
              type: "link",
              label: "Code Samples",
              href: "https://github.com/temporalio/samples-typescript#samples",
            },
          ],
        },
        {
          type: "category",
          label: "TS Core APIs",
          collapsed: false,
          items: [
            "typescript/workflows",
            "typescript/activities",
            "typescript/workers",
            "typescript/clients",
          ],
        },
        "typescript/troubleshooting",
        {
          type: "category",
          label: "TS Production APIs",
          items: [
            "typescript/security",
            "typescript/testing",
            "typescript/patching",
            "typescript/logging",
            "typescript/production-deploy",
          ],
        },
        {
          type: "category",
          label: "TS Advanced APIs",
          items: [
            "typescript/cancellation-scopes",
            "typescript/determinism",
            "typescript/handling-failure",
            "typescript/search-attributes",
            "typescript/interceptors",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Quick links",
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Concepts",
          href: "/docs/concepts/introduction",
        },
        {
          type: "link",
          label: "Server",
          href: "/docs/server/introduction",
        },
        {
          type: "link",
          label: "SDKs",
          href: "/application-development",
        },
        {
          type: "link",
          label: "System tools",
          href: "/docs/system-tools/introduction",
        },
        {
          type: "link",
          label: "Additional resources",
          href: "/docs/external-resources",
        },
      ],
    },
  ],
  coreConcepts: [
    {
      type: "category",
      label: "Core concepts",
      collapsed: false,
      items: [
        "concepts/introduction",
        "concepts/workflows",
        "concepts/activities",
        "concepts/workers",
        "concepts/task-queues",
        "concepts/signals",
        "concepts/queries",
        "temporal-explained/visibility",
      ],
    },
    {
      type: "category",
      label: "Additional resources",
      collapsed: false,
      items: [
        "samples-library",
        "external-resources",
        "cadence-to-temporal",
        "reference/glossary",
        "reference/events",
      ],
    },

    {
      type: "category",
      label: "Quick links",
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Server",
          href: "/docs/server/introduction",
        },
        {
          type: "link",
          label: "SDKs",
          href: "/application-development",
        },
        {
          type: "link",
          label: "System tools",
          href: "/docs/system-tools/introduction",
        },
      ],
    },
  ],
  temporalExplained: [
    {
      type: "category",
      label: "Temporal explained",
      collapsed: true,
      items: [
        "temporal-explained/introduction",
        "temporal-explained/workflows",
        "temporal-explained/activities",
        "temporal-explained/timeouts-and-retries",
        "temporal-explained/clusters",
      ],
    },
  ],
};
