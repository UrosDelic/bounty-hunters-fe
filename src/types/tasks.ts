// TODO double check type
export interface Task {
  createdAt: string;
  deadline?: string | null;
  description: string | null;
  id: string;
  points: number;
  rejectedMessage?: string | null;
  solution?: string | null;
  status?: string;
  title: string;
  updatedAt: string;
  userId?: string | null;
}

export interface Tasks {
  data: Task[];
  info: { totalCount: number; totalPages: number };
}
