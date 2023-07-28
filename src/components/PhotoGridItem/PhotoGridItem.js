import React, { Fragment } from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            srcSet={`
              ${src.replace(".jpg", ".avif")} 1x,
              ${src.replace(".jpg", "@2x.avif")} 2x,
              ${src.replace(".jpg", "@3x.avif")} 3x
            `}
            type="image/avif"
          />
          <source
            srcSet={`
            ${src} 1x,
            ${src.replace(".jpg", "@2x.jpg")} 2x,
            ${src.replace(".jpg", "@3x.jpg")} 3x
          `}
            type="image/jpg"
          />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Fragment key={tag}>
            <Tag>{tag}</Tag>{" "}
          </Fragment>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;

  object-fit: cover;
`;

const Tags = styled.ul`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  line-height: calc(1em + 8px);
  margin-left: 4px;
  margin-right: 4px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default PhotoGridItem;
