---
id: how-to-remove-a-search-attribute-from-a-cluster-using-tctl
title: How to remove a Search Attribute from a Cluster using tctl
description: Use the `tctl admin cluster remove-search-attributes` command to remove a Search Attribute from a Cluster.
tags:
  - tctl
  - visibility
  - filtered-lists
---

<!-- prettier-ignore -->
import * as WhatIsASearchAttribute from './what-is-a-search-attribute.md'

Use the following command to remove a <preview page={WhatIsASearchAttribute}>Search Attribute</preview> from a Cluster:

```bash
tctl admin cluster remove-search-attributes --name <SearchAttributeKey>
```

Only custom Search Attributes can be removed from a Cluster.
Default Search Attributes cannot be removed.

Removing a Search Attribute removes it from the Cluster's metadata but does not remove it from the Elasticsearch index.
This means that the Search Attribute can be added back later as the same type.
After a Search Attribute has been added to the Elasticsearch index, it cannot be changed.
