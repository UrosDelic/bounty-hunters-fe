import { NewTasks, CompletedTasks } from 'types';
import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';

interface FeedStoreProps {
  loading: boolean;
  limit: number;
  offset: number;
  completed: CompletedTasks[];
  new: NewTasks[];
}

class FeedStore {
  feed: FeedStoreProps = {
    loading: false,
    completed: [],
    new: [],
    limit: 3,
    offset: 1,
  };

  constructor() {
    makeAutoObservable(this);
  }

  get newTasks() {
    return this.feed.new;
  }
  get completedTasks() {
    return this.feed.completed;
  }

  get loading() {
    return this.feed.loading;
  }

  getNewTasks = async () => {
    this.feed.loading = true;
    const { data } = await axios.get<NewTasks[]>(
      `https://jsonplaceholder.typicode.com/posts?_page=${this.feed.offset}&_limit=${this.feed.limit}`
    );

    if (data) {
      runInAction(() => {
        this.feed.new = [...this.feed.new, ...data];
      });
    }
  };

  getCompletedTasks = async () => {
    this.feed.loading = true;
    const { data } = await axios.get<CompletedTasks[]>(
      `https://jsonplaceholder.typicode.com/comments?_page=${this.feed.offset}&_limit=${this.feed.limit}`
    );

    if (data) {
      runInAction(() => {
        this.feed.loading = false;
        this.feed.completed = [...this.feed.completed, ...data];
      });
    }
  };
  clearFeedState() {
    this.feed.completed = [];
    this.feed.new = [];
  }
  loadNewTasks() {
    setTimeout(() => {
      this.feed.offset++;
      this.getNewTasks();
      this.feed.loading = false;
    }, 3000);
  }

  loadCompletedTasks() {
    setTimeout(() => {
      this.feed.offset++;
      this.feed.loading = true;
      this.getCompletedTasks();
    }, 3000);
  }

  initialLoad(limit: number) {
    this.feed.offset = 1;
    this.feed.limit = limit;
    this.clearFeedState();
  }
}

export default new FeedStore();
