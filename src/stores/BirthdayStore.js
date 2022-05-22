import { defineStore } from 'pinia'

import birthdays from '../../seeds/birthdays.json';

export const useBirthdayStore = defineStore('BirthdayStore', {
  state: () => {
    return {
      birthdays
    }
  },
  actions: {
    loadBirthdays() {
      
    }
  }
});
