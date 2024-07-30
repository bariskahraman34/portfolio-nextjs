import { createClient } from '@supabase/supabase-js'
import Projects from './Projects';

export default async function ListProjects(){
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey)

  const { data: projects, error: projectsError } = await supabase.from('projects').select('*');

  const { data: images , error: imagesError } = await supabase.from('project-images').select('*')

  const { data: techs , error: techsError } = await supabase.from('project-technologies').select('*')

  return <Projects projects={projects} images={images} technologies={techs} />
}