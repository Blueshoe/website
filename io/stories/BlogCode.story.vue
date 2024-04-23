<template>
  <Story title="BlogCode" :layout="{ type: 'grid', width: '100%' }">
    <Variant :title="'Variant 1'">
      <BlogCode> pip install hurricane </BlogCode>
    </Variant>
  </Story>
</template>

<docs lang="md">
# BlogCode

Global code component

## Props

- no props

## Slots

- default - Code

## MD files usage

````
::BlogCode{.mb-5}
```docker
pip install hurricane
```
::
````
</docs>
