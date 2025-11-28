import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console in development
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '2rem',
            textAlign: 'center',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#ff6b6b' }}>
            Something went wrong
          </h1>
          <p style={{ marginBottom: '2rem', color: '#666' }}>
            The application encountered an unexpected error.
          </p>
          <details
            style={{
              maxWidth: '600px',
              textAlign: 'left',
              marginBottom: '2rem',
              padding: '1rem',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}
          >
            <summary style={{ cursor: 'pointer', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Error Details
            </summary>
            {this.state.error && (
              <code style={{ fontSize: '0.9rem', color: '#333' }}>
                {this.state.error.toString()}
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </code>
            )}
          </details>
          <button
            onClick={this.handleReset}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
