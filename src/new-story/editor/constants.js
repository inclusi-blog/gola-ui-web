import CheckList from '@editorjs/checklist';
import Code from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import List from '@editorjs/list';
import Warning from '@editorjs/warning';
import LinkTool from '@editorjs/link';
import Image from '@editorjs/image';
import Raw from '@editorjs/raw';
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import InlineCode from '@editorjs/inline-code';
import SimpleImage from '@editorjs/simple-image';
import Mention from '@mrpritchett/editorjs-mentions';
import Undo from 'editorjs-undo';
import {
  GetPreSignDraftImageURL, SyncDraftImage,
  UploadDraftImage,
} from "../draft.service";


const EditorBasicConfig = (draftID) => {
  return {
    embed: Embed,
    table: Table,
    marker: Marker,
    list: List,
    warning: Warning,
    code: Code,
    linkTool: {
      class: LinkTool,
      config: {
        endpoint: 'http://localhost:8080'
      }
    },
    image: {
      class: Image,
      config: {
        uploader: {
          uploadByFile: async (file) => {
            const fileExtension = file.name.split('.').pop();
            return GetPreSignDraftImageURL(fileExtension, draftID).then(({data})=>{
              UploadDraftImage(data.url, file).then(()=>{
                const url = data.url.split('?')[0];
                const urlPaths = url.split('/');
                const uploadID = urlPaths.slice(urlPaths.length - 3);
                SyncDraftImage(uploadID.join('/'), draftID).then(({data: uploadedData})=>{
                  return {
                    success: 1,
                    file: {
                      url: `https://api.narratenet.com/api/post/v1/draft/image/${draftID}/${uploadedData.image_id}`,
                      // any other image data you want to store, such as width, height, color, extension, etc
                    }
                  };
                }).catch((err)=>{
                  // eslint-disable-next-line no-console
                  console.log(err);
                });
              }).catch((err)=>{
                // eslint-disable-next-line no-console
                console.log(err);
              });
            }).catch((err)=>{
              // eslint-disable-next-line no-console
              console.log(err);
            });
          },
        },
      },
    },
    raw: Raw,
    header: Header,
    quote: Quote,
    checklist: CheckList,
    delimiter: Delimiter,
    inlineCode: InlineCode,
    simpleImage: SimpleImage,
    mention: {
      class: Mention,
      config: {
      }
    },
    undo: Undo
  };
};

export default EditorBasicConfig;