import { supabase } from './supabaseConfig.js';

async function checkConnection() {
    const { data, error } = await supabase.from('users').select('*').limit(1);
    
    if (error) {
        console.error('❌ Error al conectar con la base de datos:', error.message);
    } else {
        console.log('✅ Conexión exitosa, datos de prueba:', data);
    }
}

checkConnection();
