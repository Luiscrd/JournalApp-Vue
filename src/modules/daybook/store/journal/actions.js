import jounalApi from '@/api/journalApi'

// export const myAction = async ({ commit }) => {

// }

export const loadEntries = async ({ commit }) => {

    const { data } = await jounalApi.get('/entries.json')

    if ( !data ) return commit('setEntries', [])

    const entries = []

    for (let id of Object.keys(data)) {

        entries.push({
            id,
            ...data[id]
        })

    }

    commit('setEntries', entries)

}

export const updateEntry = async ({ commit }, entry) => {

    const { date, picture, text } = entry

    const dataToSave = { date, picture, text }

    await jounalApi.put(`/entries/${entry.id}.json`, dataToSave)

    commit('updateEntry', { ...entry })

}


export const createEntry = async ({ commit }, entry) => {

    const { date, picture, text } = entry

    const dataToSave = { date, picture, text }

    const { data } = await jounalApi.post(`/entries.json`, dataToSave)

    dataToSave.id = data.name

    commit('addEntry', dataToSave)

    return data.name
}

export const deleteEntry = async ({ commit }, id) => {

    await jounalApi.delete(`/entries/${id}.json`)

    commit('deleteEntry', id)

    return id

}
