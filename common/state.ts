import {create} from 'zustand'

//we need to creat a type for this store
type FeatureStore = {
    inViewFeature: string | null
    setInViewFeature: (feature: string | null) => void
}

//This is the state for if the feature is in view so we do not, have to prop drill. 
export const useFeatureStore = create<FeatureStore>((set) => ({
   inViewFeature: null,
   setInViewFeature: (feature: string | null) => set({ inViewFeature: feature })
})
)
