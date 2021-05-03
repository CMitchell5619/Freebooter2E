<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-6">
        <div class="card shadow-sm">
          Name
        </div>
      </div>
      <div class="col-3">
        <div class="card shadow-sm">
          <div class="container-fluid">
            <div class="row">
              <button @click="rollHeritage" class="col-8 btn-primary">
                Heritage
              </button>
              <div class="col-4">
                Test
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card shadow-sm" @click="rollOccupation">
          <div class="container-fluid">
            <div class="row">
              <div class="col-6 btn-primary">
                Occupation
              </div>
              <div class="col-6">
                {{ state.character.occupation }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-6">
        <div class="card shadow-sm">
          Appearance
        </div>
      </div>
      <div class="col-6">
        <div class="card shadow-sm">
          Traits
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-4">
        <div class="card shadow-sm">
          Photo Box
        </div>
      </div>
      <div class="col-8">
        <div class="card shadow-sm text-center">
          Ability Scores
        </div>
        <div class="row">
          <div class="col-8">
            <div class="card shadow-sm">
              Strength
            </div>
          </div>
          <div class="col-4">
            <div class="card shadow-sm">
              STR
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="card shadow-sm">
              Constitution
            </div>
          </div>
          <div class="col-4">
            <div class="card shadow-sm">
              CON
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="card shadow-sm">
              Dexterity
            </div>
          </div>
          <div class="col-4">
            <div class="card shadow-sm">
              DEX
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="card shadow-sm">
              Intelligence
            </div>
          </div>
          <div class="col-4">
            <div class="card shadow-sm">
              INT
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="card shadow-sm">
              Wisdom
            </div>
          </div>
          <div class="col-4">
            <div class="card shadow-sm">
              WIS
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="card shadow-sm">
              Charisma
            </div>
          </div>
          <div class="col-4">
            <div class="card shadow-sm">
              CHA
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="card shadow-sm">
              Luck
            </div>
          </div>
          <div class="col-4">
            <div class="card shadow-sm">
              LUC
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-4">
        <div class="card shadow-sm">
          Gear Box
        </div>
      </div>
      <div class="col-8">
        <div class="row">
          <div class="col-2">
            <div class="card shadow-sm">
              Armor
            </div>
          </div>
          <div class="col-4">
            <div class="card shadow-sm">
              HP
            </div>
          </div>
          <div class="col-4">
            <div class="card shadow-sm">
              XP
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card shadow-sm">
              Notes Box
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { charactersService } from '../services/CharactersService'

export default {
  name: 'Character',
  setup() {
    const state = ({
      character: computed(() => AppState.character),
      numRolled: computed(() => AppState.numRolled)
    })
    onMounted(() => {
      AppState.character = {}
    })
    return {
      state,
      async rollHeritage() {
        await charactersService.rollDice(1, 1, 6)
        await charactersService.setHeritage()
      },
      async rollOccupation() {
        // await charactersService.rollDice(1, 1, 6)
        await charactersService.setOccupation()
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
