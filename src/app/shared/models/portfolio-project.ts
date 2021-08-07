export interface PortfolioProject {
  code: string;
  introduction: string;
  previewText: string;
  problemsAndThoughProcess: ProblemAndThoughProcess[];
  projectMedia: {[key: string]: string};
  projectName: string;
  purposeAndGoal: string;
  stack: object;
  stackAndExplanation: string;
  usersAndFeatures?: ProjectUserTypesAndFeatures;
}

export interface ProblemAndThoughProcess {
  order: number;
  problemDescription: string;
  problemName: string;
  problemSolution: string;
}

export interface ProjectStack {
  order: number;
  category: string;
  namesList: string;
}

export interface ProjectUserTypesAndFeatures {
  introduction: string;
  featuresAndUsers: FeaturesForUsertype[];
}

export interface FeaturesForUsertype {
  order: number;
  presentationText: string;
  usertype: string;
  videoDemo: string;
}
