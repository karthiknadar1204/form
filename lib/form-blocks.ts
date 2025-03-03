import { FormBlockType, ObjectBlockType } from "@/@types/form-block.type";
import { TextFieldBlock } from "@/components/blocks/TextField";
import { TextAreaBlock } from "@/components/blocks/TextAreaBlock";
import { RadioSelectBlock } from "@/components/blocks/RadioSelectBlock";
import { StarRatingBlock } from "@/components/blocks/StarRatingBlock";
import { MediaBlock } from "@/components/blocks/MediaBlock";
import { CalendarBlock } from "@/components/blocks/CalendarBlock";
import { SelectBlock } from "@/components/blocks/SelectBlock";
import { HeadingBlock } from "@/components/blocks/HeadingBlock";
import { ParagraphBlock } from "@/components/blocks/ParagraphBlock";
import { RowLayoutBlock } from "@/components/blocks/layouts/RowLayout";

// Make sure all blocks are registered here
export const FormBlocks: Record<FormBlockType, ObjectBlockType> = {
  TextField: TextFieldBlock,
  TextArea: TextAreaBlock,
  RadioSelect: RadioSelectBlock,
  StarRating: StarRatingBlock,
  Media: MediaBlock,
  Calendar: CalendarBlock,  // Ensure this is included
  Select: SelectBlock,      // Ensure this is included
  Heading: HeadingBlock,
  Paragraph: ParagraphBlock,
  RowLayout: RowLayoutBlock,
};
