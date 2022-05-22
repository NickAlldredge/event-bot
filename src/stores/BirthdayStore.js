import { defineStore } from 'pinia'

export const useBirthdayStore = defineStore('BirthdayStore', {
  state: () => {
    return {
      birthdays: []
    }
  },
  actions: {
    async loadBirthdays() {
      const response = await fetch(`${import.meta.env.VITE_FIREBASE_URL}/birthdays.json`);
      console.log('loading birthdays...');
      if (!response.ok) {
        //TODO: add error handling
      } 

      const data = await response.json();
      const loadedBirthdays = [];
      for(const key in data) {
        loadedBirthdays.push({
          id: key,
          username: data[key].username,
          birthday: data[key].birthday
        });
      }

      this.birthdays = loadedBirthdays;
    }
  }
});
