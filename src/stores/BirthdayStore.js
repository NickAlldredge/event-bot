import { defineStore } from 'pinia' 
import { firebaseApp } from '../firebase/firebase.js';
import { getDatabase, ref, child, get } from 'firebase/database';

const dbRef = ref(getDatabase(firebaseApp));

export const useBirthdayStore = defineStore('BirthdayStore', {
  state: () => {
    return {
      birthdays: []
    }
  },
  actions: {
    async loadBirthdays() {
      try {
        const snapshot = await get(child(dbRef, 'birthdays'));
        if(snapshot.exists()) {
          const loadedBirthdays = [];
          const data = snapshot.val();
          for(const key in data) {
            loadedBirthdays.push({
              id: key,
              username: data[key].username,
              day: data[key].day,
              month: data[key].month
            });
          }

          this.birthdays = loadedBirthdays;
        }

      } catch (error) {
        console.error(error);
      }
      
    }
  }
});
