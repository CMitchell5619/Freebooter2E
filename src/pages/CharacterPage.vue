<template>
  <div class="character">
    <div class="container">
      <div class="row">
        <div class="col-6">
          Name
        </div>
        <div class="col-3">
          Heritage
        </div>
        <div class="col-3">
          Occupation
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          Appearance
        </div>
        <div class="col-6">
          Traits
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          Photo Box
        </div>
        <div class="col-8">
          Ability Scores
          <div class="row"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          Gear Box
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-2">
              Armor
            </div>
            <div class="col-4">
              HP
            </div>
            <div class="col-4">
              XP
            </div>
          </div>
          <div class="row">
            <div class="col">
              Notes Box
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Character',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
