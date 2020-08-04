import React, { useEffect, useRef, useState } from 'react';
import { useSlate, ReactEditor } from 'slate-react';
import { Editor, Range } from 'slate';
import { css } from 'emotion';
import { Menu, Portal } from './components/Components';
import LinkFormatter from './components/LinkFormatter';
import FormatButton from './FormatButton';
import { insertLink, isFormatActive } from './utils/formatUtils';

const HoveringToolbar = () => {
  const ref = useRef();
  const editor = useSlate();
  const isLinkActive = isFormatActive(editor, 'link');
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkValue, setLinkValue] = useState('');
  const [storedSelection, setStoredSelection] = useState({});

  useEffect(() => {
    const el = ref.current;
    const { selection } = editor;

    if (!el) {
      return;
    }

    if (showLinkInput) {
      return;
    }

    if (
      !selection ||
      !ReactEditor.isFocused(editor) ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ''
    ) {
      el.removeAttribute('style');
      return;
    }

    const domSelection = window.getSelection();
    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();
    el.style.opacity = 1;
    el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`;
    el.style.left = `${rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2}px`;
  });

  return (
    <Portal>
      <Menu
        ref={ref}
        className={css`
          padding: 8px 7px 6px;
          position: absolute;
          z-index: 1;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          top: -10000px;
          left: -10000px;
          margin-top: -6px;
          opacity: 0;
          background-color: #222;
          border-radius: 4px;
          transition: opacity 0.75s;
        `}
      >
        <Choose>
          <When condition={showLinkInput}>
            <input
              /* eslint-disable-next-line jsx-a11y/no-autofocus */
              autoFocus
              type="text"
              value={linkValue}
              onChange={(event) => setLinkValue(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  if (!linkValue) return;
                  editor.selection = storedSelection;
                  insertLink(editor, linkValue);
                  setShowLinkInput(false);
                  setLinkValue('');
                }
              }}
            />
          </When>
          <Otherwise>
            <FormatButton format="bold" icon="format_bold" />
            <FormatButton format="italic" icon="format_italic" />
            <FormatButton format="underlined" icon="format_underlined" />
            <LinkFormatter
              format="link"
              icon="link"
              showInput={() => {
                if (!isLinkActive) {
                  setShowLinkInput(false);
                  return;
                }
                setStoredSelection(editor.selection);
                setShowLinkInput(true);
              }}
            />
          </Otherwise>
        </Choose>
      </Menu>
    </Portal>
  );
};

export default HoveringToolbar;
