---
id: what-are-the-differences-between-temporal-and-a-traditional-system
title: What are the differences between Temporal and a traditional system?
description: This page compares a function execution in a traditional system and a Workflow Execution in Temporal.
tags:
  - explanation
---

import CenteredImage from "../components/CenteredImage.js"

The Temporal Platform exists to facilitate Workflow Executions.
In a traditional system, a service exists to spawn function executions.

<CenteredImage
imagePath="/diagrams/temporal-vs-traditional.svg"
imageSize="100"
title="Temporal vs Traditional system"
/>

Although the two systems seem similar at first glance, they differ in several significant ways.

**Failure**

With a traditional system, a service function execution is both volatile and short-lived.

- If a function execution fails, it's not resumable because all execution state is lost. The longer a function execution awaits, the higher the change of failure.
- A traditional function execution typically has a limited lifespan, often measured in minutes.

With Temporal, a Workflow Execution is resumable.

- A Workflow Execution is fully resumable after a failure.
- Temporal imposes no deadlines on Workflow Executions.

**State**

With a traditional system, stoppage or failure means that all execution state is lost.
Your application (or a supporting component) must monitor the service's response to initiate a retry of the service execution.
A retry starts from its _initial_ state.

With Temporal, computation resumes from its _latest_ state. All progress is retained.

**Communication**

With a traditional system, you can't communicate with a function execution.

With Temporal, Signals and Queries enable data to be sent to or extracted from a Workflow Execution.

**Scope**

With a traditional system, a service function execution can at best represent a business process.
Typically, it represents only a part of a business process.

A Temporal Workflow Execution can represent a business process or an entire business object.
