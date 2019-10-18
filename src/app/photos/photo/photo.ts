/**
 * Representacao de uma foto retornada pela WebAPI.
 */
export interface Photo {
  id: number;
  postDate: Date;
  url: string;
  description: string;
  allowComments: boolean;
  likes: number;
  comments: number;
  userId: number;
}
