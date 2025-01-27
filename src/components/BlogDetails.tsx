import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FC } from 'react';
import DetailHeader from './DetailHeader';
import type { BlogPost } from '../blogs';
import { getBlogPost } from '../blogs';

// Types
interface PdfViewerConfig {
  toolbar?: boolean;
  navpanes?: boolean;
  scrollbar?: boolean;
  statusbar?: boolean;
  view?: 'fit' | 'fitH' | 'fitV';
  zoom?: number;
  pagemode?: 'none' | 'thumbs' | 'bookmarks';
  highlight?: boolean;
  print?: boolean;
  download?: boolean;
}

interface PdfViewerProps {
  url: string;
  config?: PdfViewerConfig;
  height?: string | number;
  width?: string | number;
}

// Utilities
const createPdfUrlBuilder = () => {
  const defaultParams = {
    toolbar: '1',
    navpanes: '1',
    scrollbar: '1',
    statusbar: '1',
    view: 'fit',
    zoom: '100',
    pagemode: 'none',
    highlight: '1',
    print: '1',
    download: '1'
  };

  return (baseUrl: string, config: PdfViewerConfig = {}) => {
    const params = {
      ...defaultParams,
      toolbar: config.toolbar === false ? '0' : '1',
      navpanes: config.navpanes === false ? '0' : '1',
      scrollbar: config.scrollbar === false ? '0' : '1',
      statusbar: config.statusbar === false ? '0' : '1',
      view: config.view || defaultParams.view,
      zoom: config.zoom?.toString() || defaultParams.zoom,
      pagemode: config.pagemode || defaultParams.pagemode,
      highlight: config.highlight === false ? '0' : '1',
      print: config.print === false ? '0' : '1',
      download: config.download === false ? '0' : '1'
    };

    const hashParams = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    return `${baseUrl}#${hashParams}`;
  };
};

// Components
const LoadingIndicator: FC = () => (
  <div className="loading-indicator">Loading PDF...</div>
);

const ErrorMessage: FC<{ message: string }> = ({ message }) => (
  <div className="error-message">{message}</div>
);

const PdfFrame: FC<{
  url: string;
  isLoading: boolean;
  onLoad: () => void;
  onError: () => void;
}> = ({ url, isLoading, onLoad, onError }) => (
  <iframe
    src={url}
    title="PDF Viewer"
    width="100%"
    height="100%"
    style={{ border: 'none', display: isLoading ? 'none' : 'block' }}
    onLoad={onLoad}
    onError={onError}
  />
);

const PdfViewer: FC<PdfViewerProps> = ({
  url,
  config = {},
  height = '800px',
  width = '100%'
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleIframeLoad = () => setIsLoading(false);
  const handleIframeError = () => {
    setError('Failed to load PDF');
    setIsLoading(false);
  };

  const buildPdfUrl = createPdfUrlBuilder();
  const pdfUrl = buildPdfUrl(url, config);

  return (
    <div className="pdf-container" style={{ width, height }}>
      {isLoading && <LoadingIndicator />}
      {error && <ErrorMessage message={error} />}
      <PdfFrame
        url={pdfUrl}
        isLoading={isLoading}
        onLoad={handleIframeLoad}
        onError={handleIframeError}
      />
    </div>
  );
};

const defaultPdfConfig: PdfViewerConfig = {
  toolbar: false,
  navpanes: false,
  scrollbar: false,
  statusbar: false,
  view: 'fit',
  pagemode: 'none',
  highlight: false,
  print: false,
  download: false
};

const ContentViewer: FC<{ post: BlogPost }> = ({ post }) => {
  if (post.contentType === 'pdf' && post.pdfUrl) {
    return (
      <PdfViewer
        url={post.pdfUrl}
        config={defaultPdfConfig}
        height="800px"
      />
    );
  }
  return <p>{post.content}</p>;
};

const BlogDetails: FC = () => {
  const { id } = useParams();
  const post = getBlogPost(parseInt(id || '1'));

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div>
      <DetailHeader 
        title={post.title} 
        className="bg-dark text-white p-2 rounded mb-4" 
      />
      <ContentViewer post={post} />
    </div>
  );
};

export default BlogDetails;
