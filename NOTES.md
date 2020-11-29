# Notes

**Task 1: Store first name and display in Goals.vue**

- The current live Thriva survey also collects surname, so I have labelled the getting/setting of 'name' as 'firstName' for transparency (if a surname task was added later on).
- I have used the mapGetters helper to simplify accessing the getters - may be useful in later tasks rather than writing out the store path each time. 
- Decided to remove the action for task 1 as its not an async task and has no other logic - so only mutation needed. 

**Task 2: Storing up to 4 goals and 1 diet**

- Checkbox component needs to be as generic as possible in order to be reusable so simply emits the chosen value
- Storing goals as an array of strings as shown in the instructions - also allows easier manipulation in the mutation
- Created 'setGoals' mutation that takes the clicked value and either adds it to the goal state (if not already there and less than 4 chosen) or removes it if already there
- I asssumed that at least one goal needed to be chosen - confirmed by looking at the current live Thriva survey that has the next button disabled until a goal is chosen.
- Not sure if users should be able to unselect a diet- have added that functionality as next button catches validation if none chosen.

**Task 4: Survey Progress**

- Originally I was saving the current step as a string and finding the index of it in the stages array. This seemed unmanageable if the survey went on to add many more pages so
opted for a counter instead
- Found a bug when testing that I didn't account for the back button, so changed to count on submit and minus on back

**Task 5: API Call**

- Tested my implmentation by removing the disabled class on the name page next button, without inputting name it successfully throws an error stating name field is empty. 

**Task 6: Success Page**

- The screenshot given and hex code for details doesn't look the same? 
- If there was more options to display I think a v-for might be better on reflection but was running out of time. 
- Wanted a simple way to make the date format display nicely - stack overflow seems to recommend moment.js but didn't want to install 3rd party library, found a working date 
converter in another example so used this instead.
- Reset state is a bit blunt force, maybe should have had an inital blank state? 
