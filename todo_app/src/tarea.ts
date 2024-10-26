import { category, priority } from "./enums";


export default class Task {
    private title: string;
    private description:string;
    private expiration_date:Date;
    private creation_date:Date = new Date();
    private priority:priority;
    private completed: boolean = false;
    private progress: number = 0;
    private category: category;
    private labels: string[] = [] 
    
    constructor(
        title: string, 
        description: string, 
        expiration_date: Date, 
        priority: priority, 
        category: category
    ) {
        this.title = title;
        this.description = description;
        this.expiration_date = expiration_date;
        this.priority = priority;
        this.category = category;
    }

    // Getters
    public get_title(): string {
        return this.title;
    }

    public get_description(): string {
        return this.description;
    }

    public get_expirationDate(): Date {
        return this.expiration_date;
    }

    public get_creation_date(): Date {
        return this.creation_date;
    }

    public get_priority(): priority {
        return this.priority;
    }

    public get_completed(): boolean {
        return this.completed;
    }

    public get_progress(): number {
        return this.progress;
    }

    public get_category(): category {
        return this.category;
    }

    public get_labels(): string[] {
        return this.labels;
    }

    // Setters
    public set_title(title: string): void {
        this.title = title;
    }

    public set_description(description: string): void {
        this.description = description;
    }

    public set_expiration_date(expiration_date: Date): void {
        this.expiration_date = expiration_date;
    }

    public set_priority(priority: priority): void {
        this.priority = priority;
    }

    public set_completed(completed: boolean): void {
        this.completed = completed;
    }

    public set_progress(progress: number): void {
        this.progress = progress;
    }

    public set_category(category: category): void {
        this.category = category;
    }

    public set_labels(labels: string[]): void {
        this.labels = labels;
    }
    
}