import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuVisible: false, // Menu visibility state
  componentsVisibility: {
    Playbook: true,  // Initially true
    Contact: true,   // Initially true
    
  },
};

const activeComponentSlice = createSlice({
  name: 'activeComponent',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuVisible = !state.menuVisible;
    },
    setComponentVisibility: (state, action) => {
      const { componentName } = action.payload;

      // Set all components to false
      for (const key in state.componentsVisibility) {
        state.componentsVisibility[key] = false;
      }

      // Make the selected component visible
      if (componentName) {
        state.componentsVisibility[componentName] = true;
      }
    },
  },
});

export const { toggleMenu, setComponentVisibility } = activeComponentSlice.actions;
export default activeComponentSlice.reducer;
