import { ReactNode } from 'react';

export interface ViewPageProps {
	content: any[];
	globals: any[];
	isPreview?: boolean;
	previewOrigin?: string;
}

export interface ViewContentProps {
	components: any[] | Record<string, any>;
	content: any[];
	globals: any[];
	isPreview?: boolean;
	previewOrigin?: string;
}

export interface EZContentListenerProps {
	children: ReactNode;
}

export function getContent(slug: string, opts?: any): Promise<any>;
export function getGlobals(slug: string, opts?: any): Promise<any>;
export function getPages(slug: string, opts?: any): Promise<any>;
export function getPageOnly(slug: string, opts?: any): Promise<any>;

export default function ViewPage(props: ViewPageProps): JSX.Element;
export function ViewContent(props: ViewContentProps): JSX.Element;
export function EZContentListener(props: EZContentListenerProps): JSX.Element;