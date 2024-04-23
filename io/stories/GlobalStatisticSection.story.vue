<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([
  { greatTeamMembers: 12, successfulProjects: 231, satisfiedCustomers: 81, runningKubernetesClusters: 94 }
]);
</script>

<template>
  <Story title="GlobalStatisticSection" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalStatisticSection
        v-bind="{
          ...propVariant
        }"
      />
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalStatisticSection

Global statistic section component

## Props

- `greatTeamMembers` - Number of great team members
- `successfulProjects` - Number of successful projects
- `satisfiedCustomers` - Number of satisfied customers
- `runningKubernetesClusters` - Number of running Kubernetes clusters

## Slots

- No slots

## MD files usage

```
::GlobalStatisticSection{:greatTeamMembers=12 :successfulProjects=231 :satisfiedCustomers=81 :runningKubernetesClusters=94}

::
```
</docs>
