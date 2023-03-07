import React, { useState, useEffect, createContext } from 'react';
import { Launch } from '../graphql/__generated__/schema.graphql';

const defaultState = {
  launches: [],
  updateLaunchContext: null,
};

interface LaunchContextType {
  launches: Launch[];
  updateLaunchContext: (launchContext: Launch[]) => void;
}

const LaunchContext = createContext<LaunchContextType>(defaultState);

export default LaunchContext;
