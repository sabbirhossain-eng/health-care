import { useState } from "react";

const ReadMore = ({text}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    };
  
    const truncatedText = text.length >= 200 ? text.substring(0, 200) + '...' : text;
  
    return (
      <div>
        <p>
          {isExpanded ? text : truncatedText}
          {text.length >= 200 && (
            <span
              onClick={toggleReadMore}
              className="text-primary bg-button-color p-1 btn-sm rounded cursor-pointer ml-1"
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </span>
          )}
        </p>
      </div>
    );
};

export default ReadMore;