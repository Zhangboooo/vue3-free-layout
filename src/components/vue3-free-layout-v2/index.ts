import { View } from "./View";
import { Container } from "./Container";
import { Ground } from "./Ground.ts";
import FreeLayout from './FreeLayout.vue'
import ViewHandler from './ViewHandler.vue'

type PartialContainer = Partial<Container>
type InitData = Partial<Ground & { children: PartialContainer[] }>

export { FreeLayout, ViewHandler, View, Container, Ground }
export type { InitData }

