export interface TemplateInfo {
  success: boolean;
  data: AssetInfo[];
}

interface AssetInfo {
  template_id: string;
  name: string;
  immutable_data: { img: string };
}
