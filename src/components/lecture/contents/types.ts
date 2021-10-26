export interface Checkpoint {
  name: string;
  isChecked: boolean;
}

export interface Slide {
  slideId: number;
  content: JSX.Element;
}

export interface LectureContent {
  lectureNumber: number,
  sliderContents: Slide[],
  checkpoints: Checkpoint[],
}
